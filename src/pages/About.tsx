import Header from "@/components/Header";
import TeamSection from "@/components/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              About Our Math Club
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are a dedicated group of mathematics enthusiasts committed to
              fostering a love for mathematics among Calgary high school
              students. Our mission is to provide challenging opportunities,
              expert guidance, and a supportive community for young
              mathematicians to thrive.
            </p>
          </div>
          <TeamSection />
        </div>
      </div>
    </div>
  );
};

export default About;
