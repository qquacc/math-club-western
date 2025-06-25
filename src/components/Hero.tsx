import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/rGkKgVJZ/IMG-3361.jpg')",
        }}
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-600/90 via-purple-700/85 to-blue-800/90" />

      {/* Fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-white" />

      <div
        className={`relative container mx-auto px-4 text-center text-white transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-5xl font-bold mb-6">
          Ignite Your Passion for Mathematics
        </h1>
        <p className="text-xl mb-12 max-w-3xl mx-auto">
          A cross-school association to offer more mathematics enrichment for
          high-school students in Calgary
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/about">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-gray-100 hover:text-blue-600"
            >
              Meet Our Team
            </Button>
          </Link>
          <Link to="/quiz">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Practicing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
