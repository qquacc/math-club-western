
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';

const ClubAnnouncements = () => {
  const announcements = [
    {
      title: "Math Competition Registration",
      description: "Sign up for the upcoming regional math competition. Registration deadline is next Friday.",
      date: "2024-01-15",
      location: "Room 204",
      time: "3:30 PM",
      type: "Competition",
      urgent: true
    },
    {
      title: "Weekly Study Session",
      description: "Join us for our regular study session focusing on calculus problems.",
      date: "2024-01-18",
      location: "Library",
      time: "4:00 PM",
      type: "Study Session",
      urgent: false
    },
    {
      title: "Guest Speaker Event",
      description: "Dr. Martinez from the university will be speaking about careers in mathematics.",
      date: "2024-01-22",
      location: "Auditorium",
      time: "2:00 PM",
      type: "Event",
      urgent: false
    }
  ];

  return (
    <section id="club" className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Club Announcements</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <Card key={index} className={`${announcement.urgent ? 'border-red-200 bg-red-50' : ''}`}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{announcement.title}</CardTitle>
                <div className="flex items-center space-x-2">
                  {announcement.urgent && (
                    <Badge variant="destructive">Urgent</Badge>
                  )}
                  <Badge variant="outline">{announcement.type}</Badge>
                </div>
              </div>
              <CardDescription className="text-base">
                {announcement.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(announcement.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{announcement.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MapPin className="h-4 w-4" />
                  <span>{announcement.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ClubAnnouncements;
