
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
				<Hero />

				{/* Recent Events Section */}
				<RecentEvents />

				{/* Features Section */}
				<Features />

				{/* Call to Action */}
				<CallToAction />

				{/* Footer */}
				<Footer />
			</div>
		</div>
	);
};

export default Index;
