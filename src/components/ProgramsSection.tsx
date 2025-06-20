
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, Trophy, BookOpen, Users } from 'lucide-react';

const ProgramsSection = () => {
  const programs = [
    {
      title: "Competition Training",
      description: "Prepare for AMC, AIME, and local math competitions with expert guidance",
      icon: Trophy,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Problem Solving Workshops",
      description: "Weekly sessions focusing on advanced problem-solving techniques",
      icon: Calculator,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Peer Tutoring",
      description: "Get help from senior students or help others reinforce your knowledge",
      icon: Users,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Math Research Projects",
      description: "Explore mathematical concepts beyond the classroom curriculum",
      icon: BookOpen,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the various ways you can enhance your mathematical journey with us
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <Card key={program.title} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
