import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import { z } from "zod";
import crypto from "crypto";
import "dotenv/config";

const app = express();
app.use(express.json({ limit: "32kb" }));

app.use(cors({ origin: process.env.ALLOW_ORIGIN, methods: ["POST"] }));

const uri = process.env.MONGODB_URI!;
const dbName = process.env.MONGODB_DB || "mathclub";

const client = new MongoClient(uri, {
	serverSelectionTimeoutMS: 5000,
	maxPoolSize: 5,
});

await client.connect();

const Payload = z.object({
	puzzleId: z.string().min(1),
	name: z.string().min(1).max(120),
	email: z.string().email().max(254),
	answer: z.string().min(1).max(10000),
});

app.post("/api/potw/submit", async (req, res) => {
	try {
		const parsed = Payload.parse(req.body);
		const emailLc = parsed.email.toLowerCase().trim();
		const col = client.db(dbName).collection("potw_submissions");

		const ip =
      (req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      "";

		const ipHash = crypto.createHash("sha256").update(ip).digest("hex").slice(0, 16);

		const result = await col.updateOne(
			{ puzzleId: parsed.puzzleId, emailLc },
			{
				$setOnInsert: {
					...parsed,
					emailLc,
					createdAt: new Date(),
					ipHash,
					ua: req.headers["user-agent"] || "",
				},
			},
			{ upsert: true },
		);

		if (result.upsertedCount === 1) {
			return res.status(201).json({ ok: true });
		}
		return res.status(200).json({ ok: true, duplicate: true });
	} catch (e: unknown) {
		if (e instanceof Error) {
			return res.status(400).json({ error: "Invalid input. Please check your submission." });
		}
		console.error(e);
		return res.status(500).json({ error: "Server error" });
	}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API listening at http://localhost:${PORT}`));
