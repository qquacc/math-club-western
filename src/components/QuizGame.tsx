
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Timer, ChevronDown, ChevronUp } from "lucide-react";
import quizData from "@/data/quizQuestions.json";

interface Answer {
  answer: string;
  correct: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

const QuizGame = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [showSolution, setShowSolution] = useState(false);

  useEffect(() => {
    // Shuffle questions and answers when component mounts
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    const questionsWithShuffledAnswers = shuffledQuestions.map((q) => ({
      ...q,
      answers: [...q.answers].sort(() => Math.random() - 0.5),
    }));
    setQuestions(questionsWithShuffledAnswers);
    setStartTime(new Date());
  }, []);

  useEffect(() => {
    if (startTime && !quizCompleted) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [startTime, quizCompleted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getElapsedTime = () => {
    if (!startTime) return 0;
    const endTimeToUse = endTime || currentTime;
    return Math.floor((endTimeToUse.getTime() - startTime.getTime()) / 1000);
  };

  const handleAnswerClick = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (questions[currentQuestion].answers[answerIndex].correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowSolution(false);
    } else {
      setQuizCompleted(true);
      setEndTime(new Date());
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setQuizCompleted(false);
    setStartTime(new Date());
    setEndTime(null);
    setShowSolution(false);

    // Reshuffle questions and answers
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    const questionsWithShuffledAnswers = shuffledQuestions.map((q) => ({
      ...q,
      answers: [...q.answers].sort(() => Math.random() - 0.5),
    }));
    setQuestions(questionsWithShuffledAnswers);
  };

  if (questions.length === 0) {
    return <div className="text-center">Loading quiz...</div>;
  }

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const totalTime = getElapsedTime();

    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Quiz Completed!</CardTitle>
          <CardDescription className="text-xl">
            Your final score is: {score} out of {questions.length} ({percentage}
            %)
          </CardDescription>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Timer className="h-5 w-5 text-blue-600" />
            <span className="text-lg font-semibold text-blue-600">
              Time: {formatTime(totalTime)}
            </span>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <div className="mb-6">
            {percentage >= 80 ? (
              <p className="text-green-600 text-lg">
                Excellent work! You have a strong grasp of these mathematical
                concepts.
              </p>
            ) : percentage >= 60 ? (
              <p className="text-yellow-600 text-lg">
                Good effort! Keep practicing to improve your skills.
              </p>
            ) : (
              <p className="text-red-600 text-lg">
                Keep studying! Practice makes perfect in mathematics.
              </p>
            )}
          </div>
          <Button onClick={resetQuiz} size="lg">
            Take Quiz Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentQ = questions[currentQuestion];
  const progressValue = ((currentQuestion + 1) / questions.length) * 100;
  const elapsedTime = getElapsedTime();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Timer className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">
                {formatTime(elapsedTime)}
              </span>
            </div>
            <span className="text-sm text-gray-600">
              Score: {score}/{questions.length}
            </span>
          </div>
        </div>
        <Progress value={progressValue} className="h-2" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl">{currentQ.question}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3">
            {currentQ.answers.map((answer, index) => (
              <Button
                key={index}
                variant={
                  selectedAnswer === null
                    ? "outline"
                    : answer.correct
                    ? "default"
                    : selectedAnswer === index
                    ? "destructive"
                    : "outline"
                }
                className={`p-4 h-auto text-left justify-start ${
                  selectedAnswer === null ? "hover:bg-blue-50" : ""
                } ${
                  showResult && answer.correct
                    ? "bg-green-100 border-green-500 text-green-700"
                    : ""
                } ${
                  showResult && selectedAnswer === index && !answer.correct
                    ? "bg-red-100 border-red-500 text-red-700"
                    : ""
                }`}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedAnswer !== null}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {answer.answer}
              </Button>
            ))}
          </div>

          {/* Solution Button */}
          <div className="mt-6">
            <Button 
              variant="outline" 
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2"
            >
              {showSolution ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {showSolution ? "Hide Solution" : "Show Solution"}
            </Button>
            
            {showSolution && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Solution:</h4>
                <p className="text-blue-700">
                  {/* Placeholder solution - will be edited later */}
                  The correct answer is: {questions[currentQuestion].answers.find((a) => a.correct)?.answer}
                  <br />
                  <em>Detailed solution explanation will be added here.</em>
                </p>
              </div>
            )}
          </div>

          {showResult && (
            <div className="mt-6 text-center">
              <div className="mb-4">
                {questions[currentQuestion].answers[selectedAnswer!].correct ? (
                  <p className="text-green-600 font-semibold text-lg">
                    Correct! Well done!
                  </p>
                ) : (
                  <p className="text-red-600 font-semibold text-lg">
                    Incorrect. The correct answer is:{" "}
                    {
                      questions[currentQuestion].answers.find((a) => a.correct)
                        ?.answer
                    }
                  </p>
                )}
              </div>
              <Button onClick={handleNextQuestion} size="lg">
                {currentQuestion + 1 < questions.length
                  ? "Next Question"
                  : "Finish Quiz"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizGame;
