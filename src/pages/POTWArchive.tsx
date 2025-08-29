import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { useEffect, useState } from "react";
import { fetchPuzzles, Puzzle } from "@/lib/utils";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

function getErrorMessage(e: unknown): string {
	if (e instanceof Error) return e.message;
	if (typeof e === "string") return e;
	try {
		return JSON.stringify(e);
	} catch {
		return "Unknown error";
	}
}

function getStars(n: number): string {
	let string = "";
	for (let i = 0; i < n; i++) {
		string += "★";
	}
	for (let i = 0; i < 5 - n; i++) {
		string += "☆";
	}
	return string;
}

export default function POTWArchive() {
	const [puzzles, setPuzzles] = useState<Puzzle[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				setPuzzles(await fetchPuzzles());
			} catch (e: unknown) {
				setError(getErrorMessage(e));
			} finally {
				setLoading(false);
			}
		})();
	}, []);

	if (loading) return <div className="p-6">Loading…</div>;
	if (error) return <div className="p-6 text-red-600">{error}</div>;
	if (!puzzles?.length) return <div className="p-6">No puzzles yet.</div>;

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />
			<PageHeader
				title="Problem Of The Week"
				subtitle="Challenge the current problem, and receive recognition! Take part in these problems consistently to redeem prizes."
				backgroundImage="https://img.lovepik.com/bg/20240224/3D-Rendered-Technological-Dark-Toned-Tech-Waves-with-Polygons-and_3695383_wh1200.jpg"
			/>
			<section className="mx-auto max-w-4xl px-4 py-10">
				<h1 className="mb-6 text-3xl font-bold text-gray-900">
					Puzzle Archive
				</h1>

				<ul className="grid gap-6 sm:grid-cols-2">
					{puzzles.map((p) => (
						<li key={p.id} className="rounded-xl border">
							<div className="p-4">
								<h2 className="text-lg font-semibold">{p.title}</h2>
								<p className="text-sm text-gray-500">
									{new Date(p.date).toLocaleDateString()}
									{p.difficulty ? ` • ${getStars(p.difficulty)}` : ""}
								</p>
							</div>
							{p.image && (
								<img
									src={p.image}
									alt={p.title}
									className="h-40 w-full object-cover"
									loading="lazy"
								/>
							)}
							<div className="p-4">
								<Link
									to={`/problem-of-the-week/${p.id}`}
									className="text-teal-700 hover:underline"
								>
									View puzzle
								</Link>
							</div>
						</li>
					))}
				</ul>
			</section>
			{/* Footer */}
			<Footer />
		</div>
	);
}
