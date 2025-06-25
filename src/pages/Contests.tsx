
import { useState } from "react";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import QuizStart from "@/components/QuizStart";
import QuizGame from "@/components/QuizGame";

const Contests = () => {
  const [activeSection, setActiveSection] = useState("upcoming");
  const [quizStarted, setQuizStarted] = useState(false);

  const handleStartQuiz = () => {
    setQuizStarted(true);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "upcoming":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Upcoming Contests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Placeholder cards */}
              <Card>
                <CardHeader>
                  <CardTitle>CHSMC 2024</CardTitle>
                  <CardDescription>Calgary High School Mathematics Contest</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    The annual Calgary High School Mathematics Contest featuring challenging problems for high school students.
                  </p>
                  <p className="text-sm font-semibold">Date: March 15, 2024</p>
                  <p className="text-sm">Registration deadline: March 1, 2024</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>AMC 12</CardTitle>
                  <CardDescription>American Mathematics Competitions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    A 25-question, 75-minute, multiple choice examination in high school mathematics.
                  </p>
                  <p className="text-sm font-semibold">Date: February 8, 2024</p>
                  <p className="text-sm">Registration deadline: January 25, 2024</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>COMC</CardTitle>
                  <CardDescription>Canadian Open Mathematics Challenge</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    A challenging mathematics competition for students across Canada.
                  </p>
                  <p className="text-sm font-semibold">Date: November 2, 2024</p>
                  <p className="text-sm">Registration deadline: October 15, 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case "past":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Past Contests</h2>
            <p className="text-gray-600">
              Access problems, solutions, and marking guides from previous mathematics competitions. 
              These resources are invaluable for practice and understanding the types of problems 
              typically featured in mathematical contests.
            </p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Problems</TableHead>
                  <TableHead>Solutions</TableHead>
                  <TableHead>Marking Guide</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>CHSMC 2023 Problems</TableCell>
                  <TableCell>CHSMC 2023 Solutions</TableCell>
                  <TableCell>CHSMC 2023 Marking Guide</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CHSMC 2022 Problems</TableCell>
                  <TableCell>CHSMC 2022 Solutions</TableCell>
                  <TableCell>CHSMC 2022 Marking Guide</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>CHSMC 2021 Problems</TableCell>
                  <TableCell>CHSMC 2021 Solutions</TableCell>
                  <TableCell>CHSMC 2021 Marking Guide</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>AMC 12 2023 Problems</TableCell>
                  <TableCell>AMC 12 2023 Solutions</TableCell>
                  <TableCell>AMC 12 2023 Marking Guide</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>COMC 2023 Problems</TableCell>
                  <TableCell>COMC 2023 Solutions</TableCell>
                  <TableCell>COMC 2023 Marking Guide</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        );

      case "practice":
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Practice</h2>
            {!quizStarted ? (
              <QuizStart onStart={handleStartQuiz} />
            ) : (
              <QuizGame />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      <PageHeader
        title="Contests"
        subtitle="Participate in mathematics competitions, access past contest materials, and practice with our quiz system."
        backgroundImage="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=1920&h=600&fit=crop"
      />
      
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Contest Sections</h3>
                <div className="space-y-2">
                  <Button
                    variant={activeSection === "upcoming" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveSection("upcoming");
                      setQuizStarted(false);
                    }}
                  >
                    Upcoming Contests
                  </Button>
                  <Button
                    variant={activeSection === "past" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveSection("past");
                      setQuizStarted(false);
                    }}
                  >
                    Past Contests
                  </Button>
                  <Button
                    variant={activeSection === "practice" ? "default" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => {
                      setActiveSection("practice");
                      setQuizStarted(false);
                    }}
                  >
                    Practice
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="bg-white rounded-lg shadow-md p-8">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
