
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
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
      {!quizStarted ? (
        <>
          <PageHeader 
            title="Practice Quiz"
            subtitle="Ready to challenge yourself? Test your mathematical knowledge and skills!"
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
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Practice Quiz</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
