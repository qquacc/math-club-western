
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, Brain, Zap, Star } from 'lucide-react';

const PracticeSection = () => {
  const topics = [
    {
      title: "Algebra",
      description: "Linear equations, polynomials, and more",
      difficulty: "Medium",
      problems: 45,
      icon: Calculator,
      color: "bg-blue-500"
    },
    {
      title: "Geometry",
      description: "Shapes, angles, and spatial reasoning",
      difficulty: "Easy",
      problems: 32,
      icon: Star,
      color: "bg-green-500"
    },
    {
      title: "Calculus",
      description: "Derivatives, integrals, and limits",
      difficulty: "Hard",
      problems: 28,
      icon: Brain,
      color: "bg-red-500"
    },
    {
      title: "Statistics",
      description: "Probability, data analysis, and trends",
      difficulty: "Medium",
      problems: 38,
      icon: Zap,
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="practice" className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Practice Problems</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {topics.map((topic) => {
          const IconComponent = topic.icon;
          return (
            <Card key={topic.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${topic.color} text-white`}>
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{topic.title}</CardTitle>
                      <CardDescription className="mt-1">{topic.description}</CardDescription>
                    </div>
                  </div>
                  <Badge variant={
                    topic.difficulty === 'Easy' ? 'default' : 
                    topic.difficulty === 'Medium' ? 'secondary' : 
                    'destructive'
                  }>
                    {topic.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{topic.problems} problems available</span>
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Start Practice
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default PracticeSection;
