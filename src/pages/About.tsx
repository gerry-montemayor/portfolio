import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "Python", "Java", "C++", "ROS2", "Git", "AWS", "GCP", "React", 
    "TypeScript", "Node.js", "Docker"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Computer Science Student at Cornell University & Aspiring Software Engineer
          </p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    I'm a Computer Science student at Cornell University with a passion for 
                    software engineering and robotics. My journey in tech began with curiosity 
                    about how technology can solve real-world problems, and has evolved into 
                    hands-on experience across various domains from AI to robotics.
                  </p>
                  <p className="text-lg leading-relaxed mb-6">
                    I enjoy working with diverse technologies including Python, Java, C++, and 
                    modern web frameworks like React. Whether it's developing AI applications, 
                    programming autonomous rovers, or building web solutions, I bring 
                    enthusiasm and a problem-solving approach to every project.
                  </p>
                  
                </div>
                <div className="lg:order-first">
                  <img 
                    src="/lovable-uploads/5c33aa71-a208-45c7-a6a1-f7c158780a61.png" 
                    alt="Gerardo enjoying winter sports" 
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Interests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Hobbies</h2>
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I'm passionate about staying active and exploring the outdoors. I've played soccer since I was you, and enjoy
                   other sports, such as rock climbing and skiing. I also am learning how to play the guitar!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Experience */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-primary mb-6">Experiences</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer Intern</CardTitle>
                <p className="text-muted-foreground">Seam AI • Summer 2024</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    I had the incredible opportunity to intern at Seam AI this past summer, 
                    a startup based in San Francisc. Seam leverages AI in a platform that
                    supports sales/marketing teams. I worked on an agent to help clients build
                    custom person/company/job level personas to help them find high business-potential profiles.
                  </p>
                  <img 
                    src="/lovable-uploads/d3c0b009-5adb-4a54-9872-e247941c904b.png" 
                    alt="Seam AI team outing in San Francisco" 
                    className="rounded-lg shadow-lg w-3/4 h-auto mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Robotics Software Engineer</CardTitle>
                <p className="text-muted-foreground">Cornell Mars Rover • 2023 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  I've been a member of Cornell Mars Rover since my sophomore year. As a part of the 
                  Software Subteam, I contribute to autonomous navigation, soil sample detection, and more!
                  I've primarily worked in python and ROS2 (Robot Operating System) to build nodes and packages for
                  different capabilities of the rover, such as object detection.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Software Engineer Intern</CardTitle>
                <p className="text-muted-foreground">Technology Advancement Center • Summer 2023</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    At the TAC, I built a fully-fledged front-desk AI assistant. I had a fun time working with
                    LLMs, learning about full-stack development, and seeing my final product being used!
                  </p>
                  <img 
                    src="/lovable-uploads/c879417b-a8a4-46e4-a003-6ef33e3f1b48.png" 
                    alt="TAC internship team photo" 
                    className="rounded-lg shadow-lg w-3/4 h-auto mx-auto"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="text-sm py-2 px-4"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;