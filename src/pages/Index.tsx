
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RecentEvents from '@/components/RecentEvents';
import ProgramsSection from '@/components/ProgramsSection';
import Features from '@/components/Features';
import CallToAction from '@/components/CallToAction';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234f46e5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative">
        <Header />
        
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50">
          <Hero />
        </div>

        {/* Gradient Divider */}
        <div className="h-24 bg-gradient-to-b from-white to-white"></div>

        {/* Recent Events Section */}
        <div className="bg-white">
          <RecentEvents />
        </div>

        {/* Gradient Divider */}
        <div className="h-24 bg-gradient-to-b from-white to-gray-50"></div>

        {/* Programs Section */}
        <div className="bg-gray-50">
          <ProgramsSection />
        </div>

        {/* Gradient Divider */}
        <div className="h-24 bg-gradient-to-b from-gray-50 to-blue-50"></div>

        {/* Features Section */}
        <div className="bg-blue-50">
          <Features />
        </div>

        {/* Gradient Divider */}
        <div className="h-24 bg-gradient-to-b from-blue-50 to-purple-100"></div>

        {/* Call to Action */}
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;
