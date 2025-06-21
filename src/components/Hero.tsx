import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Ignite Your Passion for Mathematics
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
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
