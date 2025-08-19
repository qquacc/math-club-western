import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Clock, Brain, Trophy } from "lucide-react";

interface QuizStartProps {
	onStart: () => void;
}

const QuizStart = ({ onStart }: QuizStartProps) => {
	return (
		<div className="mx-auto max-w-2xl">
			<Card className="text-center">
				<CardHeader>
					<div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
						<Brain className="h-8 w-8 text-white" />
					</div>
					<CardTitle className="mb-2 text-3xl">
						Mathematics Practice Quiz
					</CardTitle>
					<CardDescription className="text-lg">
						Are you in middle school and would like to participate in the CHSMC?
						Although we encourage middle schoolers to attend, problems will
						require an understanding of Grade 10 content. We recommend trying
						this short practice quiz with past CHSMC questions to see if you're
						ready.
					</CardDescription>
				</CardHeader>
				<CardContent className="space-y-6">
					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						<div className="flex flex-col items-center space-y-2">
							<Clock className="h-8 w-8 text-blue-600" />
							<span className="font-semibold">Timed Quiz</span>
							<span className="text-sm text-gray-600">Track your progress</span>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<Brain className="h-8 w-8 text-purple-600" />
							<span className="font-semibold">10 Questions</span>
							<span className="text-sm text-gray-600">Varied difficulty</span>
						</div>
						<div className="flex flex-col items-center space-y-2">
							<Trophy className="h-8 w-8 text-yellow-600" />
							<span className="font-semibold">Instant Results</span>
							<span className="text-sm text-gray-600">See your score</span>
						</div>
					</div>

					<div className="rounded-lg bg-blue-50 p-4">
						<h4 className="mb-2 font-semibold text-blue-800">
							Quiz Instructions:
						</h4>
						<ul className="space-y-1 text-left text-blue-700">
							<li>• Answer all 10 questions to complete the quiz</li>
							<li>• Each question has 5 multiple choice options</li>
							<li>
								• Click the solution button to reveal the correct answer and
								explanation
							</li>
						</ul>
					</div>

					<Button
						onClick={onStart}
						size="lg"
						className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 text-white hover:from-blue-700 hover:to-purple-700"
					>
						Start Practice Quiz
					</Button>
				</CardContent>
			</Card>
		</div>
	);
};

export default QuizStart;
