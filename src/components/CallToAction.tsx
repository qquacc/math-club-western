
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Mathematical Journey?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join our community of passionate mathematics students and unlock your potential.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/quiz">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Take Practice Quiz
            </Button>
          </Link>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
