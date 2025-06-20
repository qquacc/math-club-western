
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
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop"
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
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop"
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
      ],
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=500&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section with Background Image */}
      <div className="relative py-24 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join us for these exciting mathematical events throughout the year. 
            From tutoring sessions to competitions, there's something for everyone!
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.title} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}>
                {/* Image Section */}
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 lg:h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-1/2">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
