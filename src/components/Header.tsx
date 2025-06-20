
import { Calculator, Trophy, BookOpen, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8" />
            <h1 className="text-2xl font-bold">MathClub Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#practice" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Calculator className="h-4 w-4" />
              <span>Practice</span>
            </a>
            <a href="#leaderboard" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </a>
            <a href="#resources" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Resources</span>
            </a>
            <a href="#club" className="flex items-center space-x-2 hover:text-blue-200 transition-colors">
              <Users className="h-4 w-4" />
              <span>Club</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
