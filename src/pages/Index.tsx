
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import PracticeSection from '@/components/PracticeSection';
import Leaderboard from '@/components/Leaderboard';
import StudyResources from '@/components/StudyResources';
import ClubAnnouncements from '@/components/ClubAnnouncements';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome back, Alex!</h1>
          <p className="text-gray-600 text-lg">Ready to solve some challenging problems today?</p>
        </div>
        
        <Dashboard />
        <PracticeSection />
        <Leaderboard />
        <StudyResources />
        <ClubAnnouncements />
      </main>
    </div>
  );
};

export default Index;
