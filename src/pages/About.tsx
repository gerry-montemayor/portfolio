import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Users, Coffee } from "lucide-react";

const About = () => {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", 
    "AWS", "Docker", "Git", "UI/UX Design", "REST APIs"
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, readable code that stands the test of time."
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating beautiful, intuitive interfaces that users love."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver great products."
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and improving my craft."
    }
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

        {/* Values */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">What Drives Me</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <value.icon className="h-6 w-6 text-primary" />
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;