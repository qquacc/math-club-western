import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Trophy, Calendar, Award, Users } from "lucide-react";
import Footer from "@/components/Footer";

const CompetitionTraining = () => {
	const competitions = [
		{
			name: "AMC 8",
			description:
        "American Mathematics Competitions 8 for middle school students",
			icon: Trophy,
			difficulty: "Beginner",
		},
		{
			name: "AMC 10/12",
			description: "American Mathematics Competitions for high school students",
			icon: Award,
			difficulty: "Intermediate",
		},
		{
			name: "AIME",
			description: "American Invitational Mathematics Examination",
			icon: Calendar,
			difficulty: "Advanced",
		},
		{
			name: "Local Competitions",
			description: "Regional and provincial mathematics competitions",
			icon: Users,
			difficulty: "Various",
		},
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />

			<PageHeader
				title="Competition Training"
				subtitle="Prepare for prestigious mathematics competitions with expert guidance and structured training programs."
				backgroundImage=""
			/>

			<div className="py-16">
				<div className="container mx-auto px-4">
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						{competitions.map((comp) => {
							const IconComponent = comp.icon;
							return (
								<Card
									key={comp.name}
									className="transition-shadow duration-300 hover:shadow-lg"
								>
									<CardHeader>
										<div className="flex items-center space-x-3">
											<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
												<IconComponent className="h-6 w-6" />
											</div>
											<div>
												<CardTitle className="text-2xl">{comp.name}</CardTitle>
												<span className="text-sm font-medium text-blue-600">
													{comp.difficulty}
												</span>
											</div>
										</div>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-base text-gray-700">
											{comp.description}
										</CardDescription>
									</CardContent>
								</Card>
							);
						})}
					</div>
				</div>
			</div>

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CompetitionTraining;
