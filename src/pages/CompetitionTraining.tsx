import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trophy, Calendar, Award, Users } from "lucide-react";

const CompetitionTraining = () => {
  const competitions = [
    {
      name: "AMC 8",
      description:
        "American Mathematics Competitions 8 for middle school students",
      icon: Trophy,
      difficulty: "Beginner",
    },
    {
      name: "AMC 10/12",
      description: "American Mathematics Competitions for high school students",
      icon: Award,
      difficulty: "Intermediate",
    },
    {
      name: "AIME",
      description: "American Invitational Mathematics Examination",
      icon: Calendar,
      difficulty: "Advanced",
    },
    {
      name: "Local Competitions",
      description: "Regional and provincial mathematics competitions",
      icon: Users,
      difficulty: "Various",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <PageHeader
        title="Competition Training"
        subtitle="Prepare for prestigious mathematics competitions with expert guidance and structured training programs."
        backgroundImage=""
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitions.map((comp) => {
              const IconComponent = comp.icon;
              return (
                <Card
                  key={comp.name}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{comp.name}</CardTitle>
                        <span className="text-sm text-blue-600 font-medium">
                          {comp.difficulty}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-base">
                      {comp.description}
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

export default CompetitionTraining;
