
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Brain, Target, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Expert Mentorship",
      description: "Learn from experienced mathematics teachers and competition veterans",
      icon: Brain,
      stats: "15+ mentors"
    },
    {
      title: "Competition Success",
      description: "Our students consistently rank in top percentiles of national competitions",
      icon: Award,
      stats: "85% success rate"
    },
    {
      title: "Focused Learning",
      description: "Small group sessions ensure personalized attention and rapid progress",
      icon: Target,
      stats: "Max 12 per group"
    },
    {
      title: "Quick Results",
      description: "See improvement in problem-solving skills within the first month",
      icon: Zap,
      stats: "30 days average"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Math Club?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide the perfect environment for mathematical growth and achievement
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card key={feature.title} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">{feature.stats}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
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

export default Features;
