import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import QuizGame from "@/components/QuizGame";
import QuizStart from "@/components/QuizStart";
import { useState } from "react";

const Quiz = () => {
	const [quizStarted, setQuizStarted] = useState(false);

	const handleStartQuiz = () => {
		setQuizStarted(true);
	};

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />
			{!quizStarted ? (
				<>
					<PageHeader
						title="Practice Quiz"
						subtitle="Get an understanding of the difficulty of the CHSMC by taking this 10 question quiz, with problems of varying difficulty."
						backgroundImage="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=600&fit=crop"
					/>
					<div className="py-8">
						<div className="container mx-auto px-4">
							<QuizStart onStart={handleStartQuiz} />
						</div>
					</div>
				</>
			) : (
				<>
					<div className="py-8">
						<div className="container mx-auto px-4">
							<div className="mb-8 text-center">
								<h1 className="mb-4 text-4xl font-bold text-gray-800">
									Practice Quiz
								</h1>
								<p className="mx-auto max-w-2xl text-lg text-gray-600">
									Answer each question carefully. Good luck!
								</p>
							</div>
							<QuizGame />
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Quiz;
