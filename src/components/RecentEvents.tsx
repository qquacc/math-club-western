import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin } from 'lucide-react';
import { useEffect, useState } from 'react';
import recentEventsData from '@/data/recentEvents.json';
import '../RecentEvents.css';
import { calculateDaysUntil, formatDaysUntil } from '@/utils/dateUtils';

const RecentEvents = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const looped = [...recentEventsData, ...recentEventsData];

  return (
    <section className="py-16 bg-white relative">
      <div className={`relative container mx-auto px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest activities and upcoming events
          </p>
        </div>

        <div className="relative group rounded-xl bg-white shadow">

          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="overflow-hidden">
            <div className="scroller-track flex gap-6 py-5 px-4 will-change-transform">
              {looped.map((event) => {
                const daysUntil = calculateDaysUntil(event.date);
                return (
                  <Card key={event.title} className="min-w-[380px] max-w-[380px] shrink-0 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-2 py-1 rounded text-sm ${
                            event.status === 'Upcoming'
                              ? 'bg-green-100 text-green-600'
                              : 'bg-blue-100 text-blue-600'
                          }`}>
                          {event.status}
                        </span>
                        <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
                          {formatDaysUntil(daysUntil)}
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
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;