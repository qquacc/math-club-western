
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Trophy, Users, MapPin, ExternalLink } from "lucide-react";
import Footer from "@/components/Footer";

const Contests = () => {
	const contests = [
		{
			title: "Calgary High School Mathematics Contest",
			date: "March 15, 2025",
			location: "Western Canada High School",
			description: "Annual city-wide mathematics competition featuring challenging problems across all high school levels.",
			status: "Registration Open",
			participants: "150+ expected",
			prizes: "Medals and Certificates",
			difficulty: "All Levels"
		},
		{
			title: "Alberta Mathematics Competition",
			date: "April 20, 2025", 
			location: "University of Calgary",
			description: "Provincial mathematics competition with participants from across Alberta.",
			status: "Coming Soon",
			participants: "300+ expected",
			prizes: "Scholarships Available",
			difficulty: "Advanced"
		},
		{
			title: "Canadian Mathematical Olympiad Qualifier",
			date: "May 10, 2025",
			location: "Various Locations",
			description: "Qualifying competition for the Canadian Mathematical Olympiad.",
			status: "Applications Open",
			participants: "50+ selected",
			prizes: "CMO Qualification",
			difficulty: "Expert"
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />
			<PageHeader
				title="Mathematics Contests"
				subtitle="Challenge yourself in prestigious mathematics competitions and showcase your problem-solving skills against peers from across the region."
				backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop"
			/>

			<div className="py-16">
				<div className="container mx-auto px-4">
					<div className="max-w-6xl mx-auto">
						{/* Upcoming Contests */}
						<div className="mb-12">
							<h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Upcoming Contests</h2>
							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{contests.map((contest) => (
									<Card key={contest.title} className="transition-shadow duration-300 hover:shadow-lg">
										<CardHeader>
											<div className="flex items-center justify-between mb-2">
												<Badge variant={contest.status === "Registration Open" ? "default" : "secondary"}>
													{contest.status}
												</Badge>
												<Trophy className="h-5 w-5 text-yellow-500" />
											</div>
											<CardTitle className="text-xl mb-2">{contest.title}</CardTitle>
											<div className="space-y-2 text-sm text-gray-600">
												<div className="flex items-center gap-2">
													<Calendar className="h-4 w-4" />
													<span>{contest.date}</span>
												</div>
												<div className="flex items-center gap-2">
													<MapPin className="h-4 w-4" />
													<span>{contest.location}</span>
												</div>
												<div className="flex items-center gap-2">
													<Users className="h-4 w-4" />
													<span>{contest.participants}</span>
												</div>
											</div>
										</CardHeader>
										<CardContent>
											<CardDescription className="mb-4">
												{contest.description}
											</CardDescription>
											<div className="space-y-2 mb-4">
												<div className="flex justify-between text-sm">
													<span className="font-medium">Difficulty:</span>
													<span className={`font-medium ${
														contest.difficulty === "Expert" ? "text-red-600" :
														contest.difficulty === "Advanced" ? "text-orange-600" :
														"text-green-600"
													}`}>
														{contest.difficulty}
													</span>
												</div>
												<div className="flex justify-between text-sm">
													<span className="font-medium">Prizes:</span>
													<span>{contest.prizes}</span>
												</div>
											</div>
											<Button className="w-full" variant="outline">
												<ExternalLink className="h-4 w-4 mr-2" />
												Learn More
											</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</div>

						{/* Contest Preparation Tips */}
						<Card className="mb-8">
							<CardHeader>
								<CardTitle className="text-2xl text-center">Contest Preparation Tips</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<div>
										<h3 className="text-lg font-semibold mb-3 text-blue-600">Study Strategies</h3>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-start gap-2">
												<span className="text-blue-500 mt-1">•</span>
												Practice past competition problems regularly
											</li>
											<li className="flex items-start gap-2">
												<span className="text-blue-500 mt-1">•</span>
												Focus on problem-solving techniques rather than memorization
											</li>
											<li className="flex items-start gap-2">
												<span className="text-blue-500 mt-1">•</span>
												Join our weekly problem-solving sessions
											</li>
											<li className="flex items-start gap-2">
												<span className="text-blue-500 mt-1">•</span>
												Work with peers to discuss different approaches
											</li>
										</ul>
									</div>
									<div>
										<h3 className="text-lg font-semibold mb-3 text-green-600">Day of Contest</h3>
										<ul className="space-y-2 text-gray-700">
											<li className="flex items-start gap-2">
												<span className="text-green-500 mt-1">•</span>
												Get a good night's sleep before the competition
											</li>
											<li className="flex items-start gap-2">
												<span className="text-green-500 mt-1">•</span>
												Arrive early to familiarize yourself with the venue
											</li>
											<li className="flex items-start gap-2">
												<span className="text-green-500 mt-1">•</span>
												Read all problems before starting
											</li>
											<li className="flex items-start gap-2">
												<span className="text-green-500 mt-1">•</span>
												Manage your time effectively across all problems
											</li>
										</ul>
									</div>
								</div>
							</CardContent>
						</Card>

						{/* Past Results */}
						<Card>
							<CardHeader>
								<CardTitle className="text-2xl text-center">Our Recent Achievements</CardTitle>
								<CardDescription className="text-center">
									Our club members' outstanding performance in recent competitions
								</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
									<div className="text-center">
										<div className="text-3xl font-bold text-yellow-600 mb-2">1st Place</div>
										<div className="text-sm text-gray-600">Calgary Regional Math Contest 2024</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold text-gray-500 mb-2">2nd Place</div>
										<div className="text-sm text-gray-600">Alberta Provincial Competition 2024</div>
									</div>
									<div className="text-center">
										<div className="text-3xl font-bold text-orange-600 mb-2">3rd Place</div>
										<div className="text-sm text-gray-600">Western Canada Mathematics Olympiad 2024</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Contests;
