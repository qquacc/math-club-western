
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: "Math Tutoring for High School Students",
      date: "July 19, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Central Library",
      description: "Free tutoring sessions for high school students struggling with mathematics. Our experienced volunteers provide personalized help with homework, test preparation, and concept reinforcement. No registration required - just drop in!",
      details: [
        "Covers all high school math topics",
        "One-on-one and small group sessions",
        "Experienced student tutors",
        "Free of charge"
      ]
    },
    {
      title: "High School Math Contest",
      date: "December 15, 2024",
      time: "9:00 AM - 3:00 PM",
      location: "Western High School",
      description: "Annual inter-school mathematics competition featuring challenging problems across all high school math topics. Students compete individually and in teams for prizes and recognition.",
      details: [
        "Individual and team competitions",
        "Multiple difficulty levels",
        "Prizes for top performers",
        "Lunch provided for participants"
      ]
    },
    {
      title: "End of Year Mathematics Get Together",
      date: "May 25, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "School Auditorium",
      description: "Celebrate the year's achievements with presentations, awards ceremony, and mathematical games for all members. Join us for an evening of mathematics, fun, and community.",
      details: [
        "Awards ceremony for outstanding members",
        "Student presentations on research projects",
        "Mathematical games and puzzles",
        "Refreshments and networking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Upcoming Events</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for these exciting mathematical events throughout the year. 
              From tutoring sessions to competitions, there's something for everyone!
            </p>
          </div>
          
          <div className="space-y-8">
            {events.map((event, index) => (
              <Card key={event.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{event.title}</CardTitle>
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base mb-6">
                    {event.description}
                  </CardDescription>
                  
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-3">Event Highlights:</h4>
                    <ul className="space-y-2">
                      {event.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
