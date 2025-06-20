
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Ignite Your Passion for Mathematics
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Join Calgary's premier high school math club where students explore advanced concepts, 
          compete in prestigious competitions, and build lifelong friendships through the beauty of mathematics.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/quiz">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Practicing
            </Button>
          </Link>
          <Link to="/about">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Meet Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
