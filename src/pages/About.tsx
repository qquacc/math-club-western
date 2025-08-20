
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const About = () => {
	return (
		<div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			{/* Grid pattern background */}
			<div 
				className="absolute inset-0 opacity-5"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.3'%3E%3Cpath d='M40 40H0V0h40v40zM20 20v20H0V20h20zm20 0v20H20V20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
				}}
			/>
			
			<Header />
			<PageHeader 
				title="About Our Math Club"
				subtitle="We are a dedicated group of mathematics enthusiasts committed to fostering a love for mathematics among Calgary high school students. Our mission is to provide challenging opportunities, expert guidance, and a supportive community for young mathematicians to thrive."
				backgroundImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1920&h=600&fit=crop"
			/>
			<div className="relative py-16">
				<div className="container mx-auto px-4">
					<TeamSection />
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default About;
