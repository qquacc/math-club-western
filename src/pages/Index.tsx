
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProgramsSection from '@/components/ProgramsSection';
import RecentEvents from '@/components/RecentEvents';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Hero />
      <ProgramsSection />
      <RecentEvents />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;
