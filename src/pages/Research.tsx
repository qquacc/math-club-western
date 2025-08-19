
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, BookOpen, Users, Award } from "lucide-react";

const Research = () => {
	const projects = [
		{
			title: "Number Theory Explorations",
			description: "Investigate properties of prime numbers and mathematical sequences",
			icon: Microscope,
		},
		{
			title: "Geometry and Topology",
			description: "Explore advanced geometric concepts and spatial relationships",
			icon: BookOpen,
		},
		{
			title: "Applied Mathematics",
			description: "Real-world applications of mathematical concepts in science and technology",
			icon: Users,
		},
		{
			title: "Independent Studies",
			description: "Self-directed research projects with faculty mentorship",
			icon: Award,
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />
      
			<PageHeader 
				title="Math Research Projects"
				subtitle="Explore mathematical concepts beyond the classroom curriculum through guided research projects."
				backgroundImage="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=600&fit=crop"
			/>
      
			<div className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{projects.map((project) => {
							const IconComponent = project.icon;
							return (
								<Card key={project.title} className="transition-shadow duration-300 hover:shadow-lg">
									<CardHeader>
										<div className="flex items-center space-x-3">
											<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 text-red-600">
												<IconComponent className="h-6 w-6" />
											</div>
											<CardTitle className="text-2xl">{project.title}</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base text-gray-700">
											{project.description}
										</CardDescription>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Research;
