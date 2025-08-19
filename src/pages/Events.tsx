import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import recentEventsData from "@/data/recentEvents.json";
import { calculateDaysUntil, formatDaysUntil } from "@/utils/dateUtils";
import Footer from "@/components/Footer";

const Events = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 300);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
			<Header />

			<PageHeader
				title="Upcoming Events"
				subtitle="Join us for these exciting mathematical events throughout the year. From tutoring sessions to competitions, there's something for everyone!"
				backgroundImage="https://i.ibb.co/G4xLwx0c/IMG-1377.jpg"
			/>

			<div className="relative py-16">
				<div
					className={`container relative mx-auto px-4 transition-all duration-1000 ${
						isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
					}`}
				>
					<div className="space-y-12">
						{recentEventsData.map((event, index) => {
							const daysUntil = calculateDaysUntil(event.date);
							return (
								<div
									key={event.title}
									className={`flex flex-col ${
										index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
									} items-center gap-8`}
								>
									{/* Image Section */}
									<div className="lg:w-1/2">
										<div className="relative overflow-hidden rounded-lg shadow-lg">
											<img
												src={event.image}
												alt={event.title}
												className="h-64 w-full object-cover transition-transform duration-300 hover:scale-105 lg:h-80"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
											<div className="absolute right-4 top-4">
												<span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-medium text-white">
													{formatDaysUntil(daysUntil)}
												</span>
											</div>
										</div>
									</div>

									{/* Content Section */}
									<div className="lg:w-1/2">
										<Card className="transition-shadow duration-300 hover:shadow-lg">
											<CardHeader>
												<CardTitle className="mb-2 text-2xl">
													{event.title}
												</CardTitle>
												<div className="mb-4 flex flex-wrap items-center gap-4 text-gray-600">
													<div className="flex items-center space-x-2">
														<Calendar className="h-5 w-5" />
														<span className="font-medium">{event.date}</span>
													</div>
													<div className="flex items-center space-x-2">
														<Clock className="h-5 w-5" />
														<span>{event.time}</span>
													</div>
													<div className="flex items-center space-x-2">
														<MapPin className="h-5 w-5" />
														<span>{event.location}</span>
													</div>
												</div>
											</CardHeader>
											<CardContent>
												<CardDescription className="mb-6 text-base text-gray-700">
													{event.description}
												</CardDescription>

												<div className="rounded-lg bg-blue-50 p-4">
													<h4 className="mb-3 font-semibold text-blue-800">
														Event Highlights:
													</h4>
													<ul className="space-y-2">
														{event.details.map((detail, detailIndex) => (
															<li
																key={detailIndex}
																className="flex items-center text-blue-700"
															>
																<div className="mr-3 h-2 w-2 rounded-full bg-blue-500" />
																{detail}
															</li>
														))}
													</ul>
												</div>
											</CardContent>
										</Card>
									</div>
								</div>
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

export default Events;
