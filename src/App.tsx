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
import CompetitionTraining from "./pages/CompetitionTraining";
import Workshops from "./pages/Workshops";
import Tutoring from "./pages/Tutoring";
import Research from "./pages/Research";
import EventReview2025 from "./pages/events/EventReview2025";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename="/math-club-western">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/contests" element={<Contests />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/review-2025" element={<EventReview2025 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/programs/competition-training" element={<CompetitionTraining />} />
            <Route path="/programs/workshops" element={<Workshops />} />
            <Route path="/programs/tutoring" element={<Tutoring />} />
            <Route path="/programs/research" element={<Research />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
