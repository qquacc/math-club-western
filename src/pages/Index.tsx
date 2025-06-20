
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecentEvents from '@/components/RecentEvents';
import ProgramsSection from '@/components/ProgramsSection';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <Hero />
      <RecentEvents />
      <ProgramsSection />
      <Features />
      <CallToAction />
    </div>
  );
};

export default Index;
