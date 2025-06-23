
import Header from '@/components/Header';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Heart, Clock, Star } from 'lucide-react';

const Tutoring = () => {
  const features = [
    {
      title: "One-on-One Sessions",
      description: "Personalized tutoring sessions tailored to individual learning needs",
      icon: GraduationCap
    },
    {
      title: "Peer Support",
      description: "Learn from and teach fellow students in a collaborative environment",
      icon: Heart
    },
    {
      title: "Flexible Scheduling",
      description: "Book sessions at times that work best for your schedule",
      icon: Clock
    },
    {
      title: "Expert Guidance",
      description: "Get help from top-performing students and experienced mentors",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      <PageHeader 
        title="Peer Tutoring"
        subtitle="Get help from senior students or help others to reinforce your own mathematical knowledge."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=600&fit=crop"
      />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              return (
                <Card key={feature.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-2xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">
                      {feature.description}
                    </CardDescription>
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

export default Tutoring;
