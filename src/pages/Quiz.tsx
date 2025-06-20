
import Header from '@/components/Header';
import QuizGame from '@/components/QuizGame';
import QuizStart from '@/components/QuizStart';
import { useState } from 'react';

const Quiz = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4">
          {!quizStarted ? (
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">Practice Quiz</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                Ready to challenge yourself? Test your mathematical knowledge and skills!
              </p>
              <QuizStart onStart={handleStartQuiz} />
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Practice Quiz</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Answer each question carefully. Good luck!
                </p>
              </div>
              <QuizGame />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
