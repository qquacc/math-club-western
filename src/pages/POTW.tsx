
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const POTW = () => {
  const [answer, setAnswer] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) {
      toast({
        title: "Error",
        description: "Please enter an answer before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Answer Submitted!",
      description: "Thank you for your submission. We'll review it soon.",
    });
    setAnswer("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-700 bg-clip-text text-transparent">
            Problem of the Week
          </h1>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl">This Week's Problem</CardTitle>
              <CardDescription>
                Challenge yourself with our weekly mathematics problem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold mb-4">Problem #1</h3>
                <p className="text-gray-700 leading-relaxed">
                  Find the sum of all positive integers n such that when n is divided by 13, 
                  the remainder is 5, and when n is divided by 17, the remainder is 11, 
                  where n ≤ 1000.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Your Answer</CardTitle>
              <CardDescription>
                Type your solution below and submit it for review
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="answer" className="block text-sm font-medium mb-2">
                    Your Answer
                  </label>
                  <Textarea
                    id="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Enter your solution here. Show your work and explain your reasoning..."
                    className="min-h-[200px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Answer
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default POTW;
