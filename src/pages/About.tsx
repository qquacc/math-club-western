
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <PageHeader 
        title="About Our Math Club"
        subtitle="We are a dedicated group of mathematics enthusiasts committed to fostering a love for mathematics among Calgary high school students. Our mission is to provide challenging opportunities, expert guidance, and a supportive community for young mathematicians to thrive."
        backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=600&fit=crop"
      />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <TeamSection />
        </div>
      </div>
    </div>
  );
};

export default About;
