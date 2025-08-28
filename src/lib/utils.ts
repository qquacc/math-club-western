import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export type Puzzle = {
	id: string;
	title: string;
	date: string;
	image?: string;
	prompt: string;
	difficulty: number;
};

export async function fetchPuzzles(): Promise<Puzzle[]> {
	const res = await fetch("/src/data/puzzles.json", { cache: "no-store" });
	if (!res.ok) throw new Error("Failed to load puzzles.json");
	const data = (await res.json()) as Puzzle[];
	
	return data.sort((a, b) => (a.date < b.date ? 1 : -1));
}