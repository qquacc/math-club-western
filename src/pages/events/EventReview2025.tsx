import { useEffect, useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Trophy, Camera } from "lucide-react";

const EventReview2025 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <PageHeader
        title="CHSMC 2025 Event Review"
        subtitle="Celebrating an incredible mathematics competition with outstanding participants and memorable moments"
        backgroundImage="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1920&h=600&fit=crop"
      />

      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* Event Overview */}
          <div
            className={`mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
                      Calgary High School Mathematics Contest 2025
                    </CardTitle>
                    <CardDescription className="text-lg">
                      A remarkable day of mathematical excellence and
                      collaboration
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Event Completed
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-600">March 15, 2025</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">
                        Western Canada High School
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-semibold">Participants</p>
                      <p className="text-gray-600">127 Students</p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed text-lg">
                  The 2025 Calgary High School Mathematics Contest was an
                  outstanding success, bringing together brilliant young minds
                  from across the city. Students tackled challenging problems,
                  participated in collaborative math battles, and demonstrated
                  exceptional mathematical thinking. The event fostered a spirit
                  of healthy competition while celebrating the beauty of
                  mathematics.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Award Winners Section */}
          <div
            className={`mb-12 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <Trophy className="h-8 w-8 text-yellow-500" />
                Award Winners
              </h2>
              <p className="text-lg text-gray-600">
                Congratulations to our outstanding performers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* First Place */}
              <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=face"
                      alt="First Place Winner"
                      className="w-24 h-24 rounded-full object-cover border-4 border-yellow-400"
                    />
                  </div>
                  <Badge className="bg-yellow-500 text-white mb-2">
                    1st Place
                  </Badge>
                  <CardTitle className="text-xl">Sarah Chen</CardTitle>
                  <CardDescription>Western Canada High School</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">
                    Exceptional performance across all problem categories with
                    innovative solution approaches
                  </p>
                  <p className="font-semibold text-yellow-700 mt-2">
                    Score: 94/100
                  </p>
                </CardContent>
              </Card>

              {/* Second Place */}
              <Card className="bg-gradient-to-br from-gray-50 to-slate-100 border-2 border-gray-300 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Second Place Winner"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-400"
                    />
                  </div>
                  <Badge className="bg-gray-500 text-white mb-2">
                    2nd Place
                  </Badge>
                  <CardTitle className="text-xl">Marcus Rodriguez</CardTitle>
                  <CardDescription>Bishop Carroll High School</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">
                    Outstanding mathematical reasoning and clear presentation of
                    solutions
                  </p>
                  <p className="font-semibold text-gray-700 mt-2">
                    Score: 89/100
                  </p>
                </CardContent>
              </Card>

              {/* Third Place */}
              <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">
                    <img
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b176?w=300&h=300&fit=crop&crop=face"
                      alt="Third Place Winner"
                      className="w-24 h-24 rounded-full object-cover border-4 border-orange-400"
                    />
                  </div>
                  <Badge className="bg-orange-500 text-white mb-2">
                    3rd Place
                  </Badge>
                  <CardTitle className="text-xl">Emma Thompson</CardTitle>
                  <CardDescription>Sir Winston Churchill High</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">
                    Creative problem-solving techniques and excellent teamwork
                    during math battles
                  </p>
                  <p className="font-semibold text-orange-700 mt-2">
                    Score: 85/100
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event Highlights Gallery */}
          <div
            className={`mb-12 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
                <Camera className="h-8 w-8 text-blue-500" />
                Event Highlights
              </h2>
              <p className="text-lg text-gray-600">
                Capturing the spirit of mathematical excellence
              </p>
            </div>

            {/* Main Event Images */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop"
                    alt="Students working on problems"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">
                    Focused Problem Solving
                  </CardTitle>
                  <CardDescription>
                    Students deeply engaged in tackling challenging mathematical
                    problems with concentration and determination.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video">
                  <img
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
                    alt="Math battles session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <CardTitle className="text-xl mb-2">
                    Collaborative Math Battles
                  </CardTitle>
                  <CardDescription>
                    Teams working together to present their solutions and
                    mathematical reasoning to judges and peers.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Additional Event Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=400&h=400&fit=crop"
                    alt="Award ceremony"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">Award Ceremony</CardTitle>
                  <CardDescription className="text-sm">
                    Celebrating achievements and recognizing mathematical
                    excellence
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=400&fit=crop"
                    alt="Competition venue"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">Competition Venue</CardTitle>
                  <CardDescription className="text-sm">
                    The beautiful Calgary Central High School hosting our event
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=400&fit=crop"
                    alt="Networking and refreshments"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <CardTitle className="text-lg">Community Building</CardTitle>
                  <CardDescription className="text-sm">
                    Students and educators connecting over shared passion for
                    mathematics
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Event Statistics and Feedback */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-gray-800">
                  Event Impact & Feedback
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      127
                    </div>
                    <div className="text-gray-600">Total Participants</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">
                      23
                    </div>
                    <div className="text-gray-600">Schools Represented</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">
                      96%
                    </div>
                    <div className="text-gray-600">Satisfaction Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">
                      8.5
                    </div>
                    <div className="text-gray-600">Average Rating</div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Participant Testimonials
                  </h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
                      "This competition challenged me in ways I never expected.
                      The problems were tough but fair, and the collaborative
                      aspect made it even more enjoyable." - Alex M., Grade 11
                    </blockquote>
                    <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                      "The math battles were incredible! Working with teammates
                      to solve complex problems taught me so much about
                      mathematical communication." - Jessica L., Grade 12
                    </blockquote>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventReview2025;
