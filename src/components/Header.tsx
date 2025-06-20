
import { Calculator, ChevronDown } from 'lucide-react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Calculator className="h-8 w-8" />
            <Link to="/" className="text-2xl font-bold">Calgary High School Math Club</Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-200 transition-colors flex items-center h-10">
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-blue-200 hover:bg-transparent flex items-center h-10">
                  Explore Programs <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black">
                <DropdownMenuItem>
                  <Link to="/quiz" className="w-full">Practice Quiz</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Competitions
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Study Groups
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-blue-200 hover:bg-transparent flex items-center h-10">
                  Events <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white text-black">
                <DropdownMenuItem>
                  <Link to="/events" className="w-full">Recent Events</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Upcoming Competitions
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Workshops
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about" className="hover:text-blue-200 transition-colors flex items-center h-10">
              About Us
            </Link>
            
            <Link to="/quiz" className="hover:text-blue-200 transition-colors flex items-center h-10">
              Practice
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
