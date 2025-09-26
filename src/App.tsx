import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Contests from "./pages/Contests";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import POTW from "./pages/ProblemOfTheWeek";
import EventReview2025 from "./pages/events/EventReview2025";
import ProblemOfTheWeek from "./pages/ProblemOfTheWeek";
import POTWArchive from "./pages/POTWArchive";
import Login from "./pages/Login";

const App = () => {
	const [queryClient] = useState(() => new QueryClient());

	// Dynamically set basename for GitHub Pages or local
	const isProd = process.env.NODE_ENV === "production";
	const basename = isProd ? "/math-club-western" : undefined;

	return (
		<QueryClientProvider client={queryClient}>
			<TooltipProvider>
				<Toaster />
				<Sonner />
				<BrowserRouter basename={basename}>
					<Routes>
						<Route path="/" element={<Index />} />
						<Route path="/about" element={<About />} />
						<Route path="/quiz" element={<Quiz />} />
						<Route path="/contests" element={<Contests />} />
						<Route path="/events" element={<Events />} />
						<Route path="/events/review-2025" element={<EventReview2025 />} />
						<Route path="/problem-of-the-week" element={<ProblemOfTheWeek />} />
						<Route path="/problem-of-the-week/:id" element={<ProblemOfTheWeek />} />
						<Route path="/problem-of-the-week/archive" element={<POTWArchive />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</BrowserRouter>
			</TooltipProvider>
		</QueryClientProvider>
	);
};

export default App;
