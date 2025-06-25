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
    <div className="max-w-2xl mx-auto">
      <Card className="text-center">
        <CardHeader>
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Brain className="h-8 w-8 text-white" />
          </div>
          <CardTitle className="text-3xl mb-2">
            Mathematics Practice Quiz
          </CardTitle>
          <CardDescription className="text-lg">
            Test your mathematical skills with practice questions drawn directly
            from past CHSMC contests.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

          <div className="bg-blue-50 rounded-lg p-4">
            <h4 className="font-semibold text-blue-800 mb-2">
              Quiz Instructions:
            </h4>
            <ul className="text-left text-blue-700 space-y-1">
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
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8"
          >
            Start Practice Quiz
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizStart;
