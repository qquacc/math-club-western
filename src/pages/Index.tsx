import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentEvents from "@/components/RecentEvents";
import ProgramsSection from "@/components/ProgramsSection";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-blue-50">
        <Hero />
      </div>

      {/* Gradient Divider */}
      <div className="h-20 bg-gradient-to-b from-blue-600 to-white"></div>

      {/* Recent Events Section */}
      <div className="bg-white">
        <RecentEvents />
      </div>

      {/* Gradient Divider */}
      <div className="h-20 bg-gradient-to-b from-white to-gray-50"></div>

      {/* Programs Section */}
      <div className="bg-gray-50">
        <ProgramsSection />
      </div>

      {/* Gradient Divider */}
      <div className="h-20 bg-gradient-to-b from-gray-50 to-blue-50"></div>

      {/* Features Section */}
      <div className="bg-blue-50">
        <Features />
      </div>

      {/* Gradient Divider */}
      <div className="h-20 bg-gradient-to-b from-blue-50 to-purple-100"></div>

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
};

export default Index;
