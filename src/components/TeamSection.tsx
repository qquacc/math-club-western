import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Edward Xue",
      position: "Pro math",
      description:
        "Canadian Math Olympiad qualifier, IMO summer camp qualifier.",
      image: "/placeholder.svg",
      credentials: [
        "Canadian Math Olympiad Qualifier",
        "IMO Summer Camp Qualifier",
        "Cool guy",
      ],
    },
    {
      name: "Alex Chen",
      position: "Club President",
      description:
        "Grade 12 student, AMC 12 qualifier, passionate about number theory and combinatorics.",
      image: "/placeholder.svg",
      credentials: [
        "AMC 12 Qualifier",
        "Number Theory Enthusiast",
        "Club President",
      ],
    },
    {
      name: "Emma Rodriguez",
      position: "Vice President",
      description:
        "Grade 11 student, AIME qualifier, specializes in geometry and algebra problem solving.",
      image: "/placeholder.svg",
      credentials: ["AIME Qualifier", "Geometry Specialist", "Vice President"],
    },
    {
      name: "Michael Kim",
      position: "Secretary",
      description:
        "Grade 10 student, regional math competition winner, enjoys teaching younger students.",
      image: "/placeholder.svg",
      credentials: [
        "Regional Math Competition Winner",
        "Youth Math Instructor",
        "Secretary",
      ],
    },
    {
      name: "Jessica Wang",
      position: "Events Coordinator",
      description:
        "Grade 12 student, organizes math competitions and workshops for the community.",
      image: "/placeholder.svg",
      credentials: [
        "Events Organizer",
        "Workshop Leader",
        "Community Volunteer",
      ],
    },
    {
      name: "David Thompson",
      position: "Treasurer",
      description:
        "Grade 11 student, manages club finances and coordinates fundraising activities.",
      image: "/placeholder.svg",
      credentials: [
        "Club Treasurer",
        "Fundraising Coordinator",
        "Financial Planning",
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of students and faculty work together to create
            an inspiring mathematical learning environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
                {/* Credentials block rendered as a Card */}
                <div className="mt-4 flex justify-center">
                  <Card className="w-full max-w-xs bg-blue-50 border-blue-200">
                    <CardHeader className="py-2 px-4">
                      <CardTitle className="text-sm text-blue-700 font-semibold mb-1">
                        Credentials
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 px-4">
                      <ul className="text-xs text-blue-900 list-disc list-inside">
                        {member.credentials &&
                          member.credentials.map((cred, idx) => (
                            <li key={idx}>{cred}</li>
                          ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
