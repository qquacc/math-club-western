import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import teamMembers from "@/data/teamMembers.json";

const TeamSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of students and faculty work together to create
            an inspiring mathematical learning environment.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="text-center">
                <div className="w-40 h-40 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  {member.image &&
                  member.image !== "" &&
                  member.image !== "/placeholder.svg" ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <img
                      src="https://live.staticflickr.com/65535/54710883758_df5e40760b_b.jpg"
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  )}
                </div>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <CardDescription className="text-blue-600 font-semibold">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  {member.description}
                </p>
                {/* Credentials block rendered as a Card */}
                <div className="mt-4 flex justify-center">
                  <Card className="w-full max-w-xs bg-blue-50 border-blue-200">
                    <CardHeader className="py-2 px-4">
                      <CardTitle className="text-sm text-blue-700 font-semibold mb-1">
                        Credentials
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="py-2 px-4">
                      <ul className="text-xs text-blue-900 list-disc list-inside">
                        {member.credentials &&
                          member.credentials.map((cred, idx) => (
                            <li key={idx}>{cred}</li>
                          ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
