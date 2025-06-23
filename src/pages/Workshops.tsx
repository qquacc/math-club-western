
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, BookOpen, Lightbulb } from 'lucide-react';

const Workshops = () => {
  const workshops = [
    {
      title: "Problem Solving Techniques",
      description: "Learn systematic approaches to tackle complex mathematical problems",
      duration: "2 hours",
      icon: Lightbulb
    },
    {
      title: "Proof Writing",
      description: "Master the art of mathematical reasoning and formal proofs",
      duration: "1.5 hours",
      icon: BookOpen
    },
    {
      title: "Competition Strategies",
      description: "Time management and test-taking strategies for math competitions",
      duration: "1 hour",
      icon: Clock
    },
    {
      title: "Group Problem Solving",
      description: "Collaborative sessions to solve challenging problems together",
      duration: "2.5 hours",
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <PageHeader 
        title="Problem Solving Workshops"
        subtitle="Weekly sessions focusing on advanced problem-solving techniques and mathematical reasoning."
        backgroundImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&h=600&fit=crop"
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop) => {
              const IconComponent = workshop.icon;
              return (
                <Card key={workshop.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl">{workshop.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base mb-4">
                      {workshop.description}
                    </CardDescription>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      Duration: {workshop.duration}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
