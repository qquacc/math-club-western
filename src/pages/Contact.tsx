
import Header from '@/components/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "info@calgarymathclub.ca",
      icon: Mail,
      description: "Send us an email for general inquiries"
    },
    {
      title: "Phone",
      value: "(403) 555-MATH",
      icon: Phone,
      description: "Call us during office hours"
    },
    {
      title: "Location",
      value: "Calgary, Alberta",
      icon: MapPin,
      description: "Various locations across Calgary"
    },
    {
      title: "Office Hours",
      value: "Mon-Fri: 3:30-6:00 PM",
      icon: Clock,
      description: "Best times to reach us"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with the Calgary High School Math Club. We'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              return (
                <Card key={info.title} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{info.title}</CardTitle>
                        <CardDescription className="text-blue-600 font-semibold text-lg">
                          {info.value}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      {info.description}
                    </p>
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

export default Contact;
