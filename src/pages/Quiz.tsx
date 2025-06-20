
import Header from '@/components/Header';
import QuizGame from '@/components/QuizGame';

const Quiz = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Practice Quiz</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Test your mathematical skills with our practice questions. Good luck!
            </p>
          </div>
          <QuizGame />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
