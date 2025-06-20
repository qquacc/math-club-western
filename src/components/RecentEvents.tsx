
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';

const RecentEvents = () => {
  const events = [
    {
      title: "Math Tutoring for High School Students",
      date: "July 19, 2024",
      location: "Central Library",
      description: "Free tutoring sessions for high school students struggling with mathematics. Our experienced volunteers provide personalized help.",
      status: "Upcoming"
    },
    {
      title: "High School Math Contest",
      date: "December 2024",
      location: "Western High School",
      description: "Annual inter-school mathematics competition featuring challenging problems across all high school math topics.",
      status: "Upcoming"
    },
    {
      title: "End of Year Mathematics Get Together",
      date: "May 2024",
      location: "School Auditorium",
      description: "Celebrate the year's achievements with presentations, awards ceremony, and mathematical games for all members.",
      status: "Upcoming"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest activities and upcoming events
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded text-sm ${
                    event.status === 'Upcoming' 
                      ? 'bg-green-100 text-green-600' 
                      : 'bg-blue-100 text-blue-600'
                  }`}>
                    {event.status}
                  </span>
                </div>
                <CardTitle className="text-xl">{event.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {event.description}
                </CardDescription>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;
