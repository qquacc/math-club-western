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

import raw from "@/data/puzzles.json";
const data = raw as Puzzle[];	

export async function fetchPuzzles(): Promise<Puzzle[]> {
	return [...data].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function withBase(path: string) {
	const base = import.meta.env.BASE_URL || "/";
	return `${base}${path.replace(/^\/+/, "")}`;
}

const RAW_BASE = (import.meta.env.VITE_POTW_API_BASE ?? "").trim();

export function apiUrl(path: string): string {
	const p = path.startsWith("/") ? path : `/${path}`;

	if (RAW_BASE) {
		return new URL(p, RAW_BASE).toString();
	}
	return p;
}