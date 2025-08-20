
import { ChevronDown } from "lucide-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
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
					<nav className="hidden items-center space-x-6 md:flex">
						<div className="relative">
							<Link
								to="/"
								className="relative flex h-10 items-center px-4 transition-all duration-300 hover:text-blue-200 group"
							>
								<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
								<span className="relative z-10">Home</span>
							</Link>
						</div>

						<div className="relative">
							<DropdownMenu>
								<DropdownMenuTrigger asChild>
									<Button
										variant="ghost"
										className="relative flex h-10 items-center px-4 text-white hover:bg-transparent hover:text-blue-200 group"
									>
										<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
										<span className="relative z-10 flex items-center">
											Events <ChevronDown className="ml-1 h-4 w-4" />
										</span>
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
						</div>

						<div className="relative">
							<Link
								to="/about"
								className="relative flex h-10 items-center px-4 transition-all duration-300 hover:text-blue-200 group"
							>
								<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
								<span className="relative z-10">About Us</span>
							</Link>
						</div>

						<div className="relative">
							<Link
								to="/contests"
								className="relative flex h-10 items-center px-4 transition-all duration-300 hover:text-blue-200 group"
							>
								<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
								<span className="relative z-10">Contests</span>
							</Link>
						</div>

						<div className="relative">
							<Link
								to="/potw"
								className="relative flex h-10 items-center px-4 transition-all duration-300 hover:text-blue-200 group"
							>
								<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
								<span className="relative z-10">POTW</span>
							</Link>
						</div>

						<div className="relative">
							<Link
								to="/contact"
								className="relative flex h-10 items-center px-4 transition-all duration-300 hover:text-blue-200 group"
							>
								<div className="absolute inset-0 bg-transparent group-hover:bg-white/10 transform skew-x-12 transition-all duration-300 group-hover:scale-110"></div>
								<span className="relative z-10">Contact Us</span>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
