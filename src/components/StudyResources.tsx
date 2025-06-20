
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const StudyResources = () => {
  const resources = [
    {
      title: "Formula Reference Sheet",
      description: "Quick reference for all essential formulas",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#"
    },
    {
      title: "Video Tutorials",
      description: "Step-by-step explanations of key concepts",
      type: "Video",
      icon: Video,
      downloadUrl: "#"
    },
    {
      title: "Practice Test Bank",
      description: "Collection of past competition problems",
      type: "PDF",
      icon: BookOpen,
      downloadUrl: "#"
    },
    {
      title: "Study Guide",
      description: "Comprehensive preparation materials",
      type: "PDF",
      icon: FileText,
      downloadUrl: "#"
    }
  ];

  return (
    <section id="resources" className="mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Study Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource) => {
          const IconComponent = resource.icon;
          return (
            <Card key={resource.title} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-100">
                    <IconComponent className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    {resource.type}
                  </span>
                  <Button variant="outline" className="flex items-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
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

export default StudyResources;
