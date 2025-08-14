
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              src="https://live.staticflickr.com/65535/54710883758_df5e40760b_b.jpg"
              alt="Math Club Logo"
              className="h-8 w-8 rounded-full object-cover"
            />
            <Link to="/" className="text-2xl font-bold">
              Students United by Mathematics
            </Link>
          </div>
          <nav className="hidden md:flex items-center">
            {/* Home Tab */}
            <div className="relative group">
              <div className={`absolute inset-0 transform transition-all duration-300 ${
                isActive("/") 
                  ? "scale-x-110 scale-y-105 bg-white/10" 
                  : "scale-x-100 scale-y-100 bg-transparent"
              }`} 
              style={{
                clipPath: isActive("/") 
                  ? "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)"
                  : "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)"
              }}></div>
              <Link
                to="/"
                className={`relative z-10 px-6 py-3 hover:text-blue-200 transition-colors flex items-center h-10 ${
                  isActive("/") ? "text-white font-semibold" : ""
                }`}
              >
                Home
              </Link>
            </div>

            {/* Events Tab */}
            <div className="relative group">
              <div className={`absolute inset-0 transform transition-all duration-300 ${
                isActive("/events") 
                  ? "scale-x-110 scale-y-105 bg-white/10" 
                  : "scale-x-100 scale-y-100 bg-transparent"
              }`} 
              style={{
                clipPath: isActive("/events") 
                  ? "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)"
                  : "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)"
              }}></div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={`relative z-10 text-white hover:text-blue-200 hover:bg-transparent flex items-center h-10 px-6 py-3 ${
                      isActive("/events") ? "font-semibold" : ""
                    }`}
                  >
                    Events <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-black z-50">
                  <DropdownMenuItem>
                    <Link to="/events" className="w-full">
                      Recent Events
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* About Tab */}
            <div className="relative group">
              <div className={`absolute inset-0 transform transition-all duration-300 ${
                isActive("/about") 
                  ? "scale-x-110 scale-y-105 bg-white/10" 
                  : "scale-x-100 scale-y-100 bg-transparent"
              }`} 
              style={{
                clipPath: isActive("/about") 
                  ? "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)"
                  : "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)"
              }}></div>
              <Link
                to="/about"
                className={`relative z-10 px-6 py-3 hover:text-blue-200 transition-colors flex items-center h-10 ${
                  isActive("/about") ? "text-white font-semibold" : ""
                }`}
              >
                About Us
              </Link>
            </div>

            {/* Contests Tab */}
            <div className="relative group">
              <div className={`absolute inset-0 transform transition-all duration-300 ${
                isActive("/contests") 
                  ? "scale-x-110 scale-y-105 bg-white/10" 
                  : "scale-x-100 scale-y-100 bg-transparent"
              }`} 
              style={{
                clipPath: isActive("/contests") 
                  ? "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)"
                  : "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)"
              }}></div>
              <Link
                to="/contests"
                className={`relative z-10 px-6 py-3 hover:text-blue-200 transition-colors flex items-center h-10 ${
                  isActive("/contests") ? "text-white font-semibold" : ""
                }`}
              >
                Contests
              </Link>
            </div>

            {/* Contact Tab */}
            <div className="relative group">
              <div className={`absolute inset-0 transform transition-all duration-300 ${
                isActive("/contact") 
                  ? "scale-x-110 scale-y-105 bg-white/10" 
                  : "scale-x-100 scale-y-100 bg-transparent"
              }`} 
              style={{
                clipPath: isActive("/contact") 
                  ? "polygon(15% 0%, 85% 0%, 95% 100%, 5% 100%)"
                  : "polygon(20% 0%, 80% 0%, 90% 100%, 10% 100%)"
              }}></div>
              <Link
                to="/contact"
                className={`relative z-10 px-6 py-3 hover:text-blue-200 transition-colors flex items-center h-10 ${
                  isActive("/contact") ? "text-white font-semibold" : ""
                }`}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
