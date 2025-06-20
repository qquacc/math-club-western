
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Club Director & Mathematics Teacher",
      description: "PhD in Mathematics from University of Calgary. 15+ years of teaching experience and former AMC coordinator.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Competition Coordinator",
      description: "Mathematics graduate and former USAMO qualifier. Specializes in competition preparation and advanced problem solving.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "Student Mentor & Senior Member",
      description: "Grade 12 student and three-time AMC 12 Distinguished Honor Roll recipient. Passionate about peer tutoring.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      position: "Workshop Leader",
      description: "Recent graduate now studying Mathematics at MIT. Focuses on mathematical modeling and research projects.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Amanda Thompson",
      position: "Outreach Coordinator",
      description: "Organizes community events and manages partnerships with local universities and mathematics organizations.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Alex Martinez",
      position: "Technology Coordinator",
      description: "Manages our online platforms and develops interactive tools for mathematical learning and practice.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our dedicated team of educators, mentors, and student leaders
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <Card key={member.name} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-xl">{member.name}</CardTitle>
              <CardDescription className="text-blue-600 font-semibold">
                {member.position}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center">{member.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
