
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Trophy, BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramsSection = () => {
	const programs = [
		{
			title: "Competition Training",
			description: "Prepare for AMC, AIME, and local math competitions with expert guidance",
			icon: Trophy,
			color: "bg-yellow-100 text-yellow-600",
			link: "/programs/competition-training",
		},
		{
			title: "Problem Solving Workshops",
			description: "Weekly sessions focusing on advanced problem-solving techniques",
			icon: Calculator,
			color: "bg-blue-100 text-blue-600",
			link: "/programs/workshops",
		},
		{
			title: "Peer Tutoring",
			description: "Get help from senior students or help others reinforce your knowledge",
			icon: Users,
			color: "bg-green-100 text-green-600",
			link: "/programs/tutoring",
		},
		{
			title: "Math Research Projects",
			description: "Explore mathematical concepts beyond the classroom curriculum",
			icon: BookOpen,
			color: "bg-purple-100 text-purple-600",
			link: "/programs/research",
		},
	];

	return (
		<section className="py-16">
			<div className="container mx-auto px-4">
				<div className="mb-12 text-center">
					<h2 className="mb-4 text-4xl font-bold text-gray-800">Explore Our Programs</h2>
					<p className="mx-auto max-w-2xl text-lg text-gray-600">
						Discover the various ways you can enhance your mathematical journey with us
					</p>
				</div>
				<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
					{programs.map((program) => {
						const IconComponent = program.icon;
						return (
							<Card key={program.title} className="flex flex-col transition-shadow duration-300 hover:shadow-lg">
								<CardHeader className="flex-grow">
									<div className={`h-12 w-12 rounded-lg ${program.color} mb-4 flex items-center justify-center`}>
										<IconComponent className="h-6 w-6" />
									</div>
									<CardTitle className="text-xl">{program.title}</CardTitle>
								</CardHeader>
								<CardContent className="flex flex-col justify-between">
									<CardDescription className="mb-4 text-gray-600">
										{program.description}
									</CardDescription>
									<Link to={program.link}>
										<Button variant="outline" size="sm" className="mt-auto w-full">
											Learn More <ArrowRight className="ml-2 h-4 w-4" />
										</Button>
									</Link>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default ProgramsSection;
