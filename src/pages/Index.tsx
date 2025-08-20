
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentEvents from "@/components/RecentEvents";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

const Index = () => {
	return (
		<div className="relative min-h-screen">
			<div className="relative">
				<Header />

				{/* Hero Section */}
				<div className="relative bg-gradient-to-br from-gray-50 to-blue-50">
					{/* Background GIF for Hero */}
					<div 
						className="absolute inset-0 opacity-20 bg-cover bg-center"
						style={{
							backgroundImage: "url('https://media.giphy.com/media/3oKIPEqDGUULpEU0aQ/giphy.gif')"
						}}
					/>
					<Hero />
				</div>

				{/* Gradient Divider */}
				<div className="h-24 bg-gradient-to-b from-white to-white" />

				{/* Recent Events Section */}
				<div className="relative bg-white">
					{/* Background GIF for Recent Events */}
					<div 
						className="absolute inset-0 opacity-10 bg-cover bg-center"
						style={{
							backgroundImage: "url('https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif')"
						}}
					/>
					<RecentEvents />
				</div>

				{/* Gradient Divider */}
				<div className="h-24 bg-gradient-to-b from-white to-blue-50" />

				{/* Features Section */}
				<div className="relative bg-blue-50">
					{/* Background GIF for Features */}
					<div 
						className="absolute inset-0 opacity-15 bg-cover bg-center"
						style={{
							backgroundImage: "url('https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif')"
						}}
					/>
					<Features />
				</div>

				{/* Gradient Divider */}
				<div className="to-purple-150 h-12 bg-gradient-to-b from-blue-50" />

				{/* Call to Action */}
				<div className="relative">
					{/* Background GIF for CTA */}
					<div 
						className="absolute inset-0 opacity-20 bg-cover bg-center"
						style={{
							backgroundImage: "url('https://media.giphy.com/media/l2Je66zG6mAAZxgqI/giphy.gif')"
						}}
					/>
					<CallToAction />
				</div>

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};

export default Index;
