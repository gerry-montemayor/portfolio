import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "Git", "UI/UX Design", "REST APIs"
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Full Stack Developer with a passion for creating digital experiences
          </p>
        </div>

        {/* Story */}
        <div className="mb-12">
          <Card>
            <CardContent className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 5 years of experience 
                  building web applications. My journey started with curiosity about how 
                  websites work, and it has evolved into a love for creating meaningful 
                  digital experiences.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  I specialize in modern JavaScript frameworks, particularly React, and 
                  enjoy working across the entire tech stack. Whether it's crafting 
                  pixel-perfect user interfaces or designing robust backend systems, 
                  I bring attention to detail and a problem-solving mindset to every project.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open source projects, or sharing knowledge with 
                  the developer community through blog posts and mentoring.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills */}
        <div className="mb-12">
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

        {/* Experience */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Senior Full Stack Developer</CardTitle>
                <p className="text-muted-foreground">TechCorp Inc. • 2022 - Present</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Lead development of customer-facing web applications using React, Node.js, and PostgreSQL. 
                  Collaborated with cross-functional teams to deliver high-quality software solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Frontend Developer</CardTitle>
                <p className="text-muted-foreground">StartupXYZ • 2020 - 2022</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built responsive web interfaces and improved user experience across multiple product lines. 
                  Worked with design teams to implement pixel-perfect UI components.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;