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

      <div className="py-16 relative">
        <div
          className={`relative container mx-auto px-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
                  } gap-8 items-center`}
                >
                  {/* Image Section */}
                  <div className="lg:w-1/2">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                          {formatDaysUntil(daysUntil)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="lg:w-1/2">
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="text-2xl mb-2">
                          {event.title}
                        </CardTitle>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-4">
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
                        <CardDescription className="text-gray-700 text-base mb-6">
                          {event.description}
                        </CardDescription>

                        <div className="bg-blue-50 rounded-lg p-4">
                          <h4 className="font-semibold text-blue-800 mb-3">
                            Event Highlights:
                          </h4>
                          <ul className="space-y-2">
                            {event.details.map((detail, detailIndex) => (
                              <li
                                key={detailIndex}
                                className="flex items-center text-blue-700"
                              >
                                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
    </div>
  );
};

export default Events;
