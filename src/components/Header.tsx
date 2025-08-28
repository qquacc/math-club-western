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

  const getLinkClasses = (path: string) => {
    const isActive = location.pathname === path;
    return `flex h-10 items-center px-4 rounded-full transition-all duration-300 ${
      isActive
        ? "bg-white/20 text-white backdrop-blur-sm shadow-lg"
        : "hover:text-blue-200"
    }`;
  };
  return (
    <header className="bg-black">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="text-white text-lg font-bold">Logo</div>
          <nav className="hidden md:flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex h-10 items-center text-white hover:bg-transparent hover:text-blue-200 px-4 rounded-full transition-all duration-300 ${
                    location.pathname.startsWith("/events")
                      ? "bg-white/20 backdrop-blur-sm shadow-lg"
                      : ""
                  }`}
                >
                  Events <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="z-50 bg-white text-black">
                <DropdownMenuItem>
                  <Link to="/events" className="w-full">
                    Recent Events
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/about" className={getLinkClasses("/about")}>
              About Us
            </Link>
            <Link to="/contests" className={getLinkClasses("/contests")}>
              Contests
            </Link>
            <Link to="/potw" className={getLinkClasses("/potw")}>
              POTW
            </Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
