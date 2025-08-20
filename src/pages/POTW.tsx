
import { useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle } from "lucide-react";
import Footer from "@/components/Footer";

const POTW = () => {
	const [answer, setAnswer] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [feedback, setFeedback] = useState("");

	const correctAnswer = "42"; // Placeholder correct answer

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitted(true);
		if (answer.trim() === correctAnswer) {
			setFeedback("Correct! Great job solving this week's problem.");
		} else {
			setFeedback("Not quite right. Keep trying and think about the problem step by step.");
		}
	};

	const resetAnswer = () => {
		setAnswer("");
		setSubmitted(false);
		setFeedback("");
	};

	return (
		<div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			{/* Grid pattern background */}
			<div 
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}
			/>
			
			<Header />

			<PageHeader
				title="Problem of the Week"
				subtitle="Challenge yourself with our weekly mathematics problem and test your problem-solving skills."
				backgroundImage="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&h=600&fit=crop"
			/>

			<div className="relative py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<Card className="mb-8">
							<CardHeader>
								<CardTitle className="text-3xl text-center mb-4">Week of January 20, 2025</CardTitle>
								<CardDescription className="text-lg text-center">
									Difficulty: Intermediate
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="bg-blue-50 p-6 rounded-lg">
									<h3 className="text-xl font-semibold mb-4 text-blue-800">Problem Statement:</h3>
									<p className="text-gray-700 leading-relaxed">
										A rectangular garden has a length that is 3 meters more than twice its width. 
										If the perimeter of the garden is 54 meters, what is the area of the garden in square meters?
									</p>
								</div>

								<div className="bg-yellow-50 p-4 rounded-lg">
									<p className="text-sm text-yellow-800">
										<strong>Hint:</strong> Let w = width, then length = 2w + 3. Use the perimeter formula!
									</p>
								</div>

								<form onSubmit={handleSubmit} className="space-y-4">
									<div>
										<Label htmlFor="answer" className="text-lg font-medium">
											Your Answer:
										</Label>
										<Input
											id="answer"
											type="text"
											value={answer}
											onChange={(e) => setAnswer(e.target.value)}
											placeholder="Enter your answer..."
											className="mt-2 text-lg p-3"
											disabled={submitted}
										/>
									</div>

									<div className="flex gap-4">
										{!submitted ? (
											<Button type="submit" size="lg" className="flex-1">
												Submit Answer
											</Button>
										) : (
											<Button type="button" onClick={resetAnswer} variant="outline" size="lg" className="flex-1">
												Try Again
											</Button>
										)}
									</div>
								</form>

								{submitted && feedback && (
									<div className={`flex items-center gap-3 p-4 rounded-lg ${
										answer.trim() === correctAnswer 
											? 'bg-green-50 text-green-800' 
											: 'bg-red-50 text-red-800'
									}`}>
										{answer.trim() === correctAnswer ? (
											<CheckCircle className="h-5 w-5" />
										) : (
											<XCircle className="h-5 w-5" />
										)}
										<p className="text-lg">{feedback}</p>
									</div>
								)}
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle className="text-2xl">Previous Problems</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="space-y-4">
									<div className="border-l-4 border-blue-500 pl-4">
										<h4 className="font-semibold">Week of January 13, 2025</h4>
										<p className="text-gray-600">Number Theory: Find all prime numbers p such that p² + 2 is also prime.</p>
									</div>
									<div className="border-l-4 border-green-500 pl-4">
										<h4 className="font-semibold">Week of January 6, 2025</h4>
										<p className="text-gray-600">Geometry: In a triangle ABC, if angle A = 60°, what is the maximum possible area?</p>
									</div>
									<div className="border-l-4 border-purple-500 pl-4">
										<h4 className="font-semibold">Week of December 30, 2024</h4>
										<p className="text-gray-600">Algebra: Solve the system of equations x² + y² = 25 and xy = 12.</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default POTW;
