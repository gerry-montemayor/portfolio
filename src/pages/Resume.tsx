import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Mail, Phone, Globe } from "lucide-react";

const Resume = () => {
  const experience = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Lead development of React-based web applications serving 100k+ users",
        "Architect and implement scalable Node.js backend services",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with design and product teams on feature development"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations Co.",
      period: "2020 - 2022",
      location: "Austin, TX",
      responsibilities: [
        "Developed responsive web applications using React and TypeScript",
        "Built RESTful APIs and integrated third-party services",
        "Optimized application performance and implemented CI/CD pipelines",
        "Participated in agile development processes and sprint planning"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Creative Agency",
      period: "2019 - 2020",
      location: "Remote",
      responsibilities: [
        "Created interactive user interfaces for client websites",
        "Implemented responsive designs with modern CSS frameworks",
        "Collaborated with designers to ensure pixel-perfect implementations",
        "Maintained and updated legacy codebases"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      location: "Boston, MA"
    }
  ];

  const skills = {
    "Frontend": ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Next.js"],
    "Backend": ["Node.js", "Python", "Express.js", "REST APIs", "GraphQL"],
    "Database": ["PostgreSQL", "MongoDB", "Redis"],
    "Tools & DevOps": ["Git", "Docker", "AWS", "Vercel", "Jest", "CI/CD"]
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Alex Johnson</h1>
          <p className="text-xl text-muted-foreground mb-4">Full Stack Developer</p>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              San Francisco, CA
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              alex@example.com
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              (555) 123-4567
            </div>
            <div className="flex items-center gap-1">
              <Globe className="h-4 w-4" />
              alexjohnson.dev
            </div>
          </div>
          
          <Button>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Summary */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. 
              Proficient in React, Node.js, and modern web technologies. Proven track record of delivering 
              high-quality solutions in fast-paced environments while mentoring junior developers and 
              collaborating effectively with cross-functional teams.
            </p>
          </CardContent>
        </Card>

        {/* Experience */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Experience</h2>
          <div className="space-y-6">
            {experience.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{job.title}</CardTitle>
                      <p className="text-primary font-medium">{job.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Technical Skills</h2>
          <div className="space-y-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category}>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-medium">{edu.school}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{edu.period}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;