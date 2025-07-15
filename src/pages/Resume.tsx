import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, Linkedin, Github } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownloadResume = async () => {
    try {
      const { data, error } = await supabase.storage
        .from('resume')
        .download('gerardo-montemayor-resume.pdf');

      if (error) {
        toast({
          title: "Download failed",
          description: "Resume PDF not found. Please upload your resume first.",
          variant: "destructive",
        });
        return;
      }

      // Create download link
      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Gerardo-Montemayor-Resume.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      toast({
        title: "Success",
        description: "Resume downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };
  const experience = [
    {
      title: "Software Engineering Intern",
      company: "Seam AI",
      period: "June 2025 - Aug 2025",
      location: "San Francisco, CA",
      techStack: "Python, GCP, LangSmith/Graph",
      responsibilities: [
        "Contributed to a fast-paced, growing startup focused on leveraging AI for sales/marketing teams",
        "Developed AI agents to support core use-cases across the platform, including custom persona generation"
      ]
    },
    {
      title: "Application Developer",
      company: "AI Innovation Lab | IT@Cornell",
      period: "Sep 2024 - Mar 2025",
      location: "Ithaca, NY",
      responsibilities: [
        "Developer for AI initiative at Cornell building GenAI-powered apps to support campus organizations",
        "Building application integrating OCR technologies, VLMs, and LLMs to automate expense processing, ensure compliance with state/school policies, and reduce manual workload for financial team"
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Technology Advancement Center",
      period: "May 2024 - Aug 2024",
      location: "Columbia, MD",
      responsibilities: [
        "Developed a virtual assistant to support business operations, including front-desk interactions and company events",
        "Deployed a secure web application with Docker and AWS EC2, establishing a CI/CD pipeline to streamline delivery of weekly MVPs and improvements based on user feedback",
        "Enhanced the user experience with features such as multiple chatting modes, face-detection, vocal conversation support, a live-streaming avatar, and an interactive facility map"
      ]
    },
    {
      title: "Robotics Software Engineer",
      company: "Cornell Mars Rover",
      period: "Aug 2023 - Present",
      location: "Ithaca, NY",
      responsibilities: [
        "Programmer for project team that builds semi-autonomous rover to compete in University Rover Challenge (URC)",
        "Collaborate with the Science team to optimize on-board spectrometer code, allowing for precise detection of chemical compounds in soil samples during competition"
      ]
    }
  ];

  const projects = [
    {
      title: "AR Tag Detector",
      organization: "Cornell Mars Rover",
      period: "Aug 2024 - May 2025",
      description: "Implemented a ROS2 package with OpenCV to process camera input to detecting tags in field, determine relative positions and orientations of tags, and navigate difficult terrain for Autonomous Challenge at URC"
    },
    {
      title: "Rover Interface",
      organization: "Cornell Mars Rover",
      period: "Aug 2023 - May 2024",
      description: [
        "Implemented a high-performance interface to operate and access rover capabilities, including camera feeds, life-detection systems, robotic arm simulations, and a central ROS2 node launch hub",
        "Created specialized GUI components using React and Foxglove Studio, a robot visualization platform, enhancing rover control through seamless integration with ROS2"
      ]
    },
    {
      title: "McGraw Tower Defense",
      organization: "Github",
      period: "Sep 2023 - Dec 2023",
      description: [
        "Developed a Cornell-themed tower defense game in OCaml with player upgrades and bullet-tracking physics",
        "Designed game art and a responsive UI, displaying creative proficiency and greatly enhancing user experience"
      ]
    }
  ];

  const education = [
    {
      degree: "B.S. in Computer Science, Minor in Electrical & Computer Engineering",
      school: "Cornell University",
      period: "Expected May 2026",
      location: "Ithaca, NY",
      gpa: "GPA: 3.42/4.0",
      courses: "Deep Learning, Machine Learning, Algorithms, Data Science, OOP & Data Structures"
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C/C++", "JavaScript", "Java", "OCaml", "HTML/CSS"],
    "Frameworks/Libraries": ["PyTorch", "Scikit", "NumPy", "LangSmith", "React", "Express.js", "Node.js", "ROS"],
    "Developer Tools": ["Git", "Docker", "Google Cloud Platform", "AWS ECS", "Linux", "MongoDB", "Foxglove Studio"],
    "Languages": ["English", "Spanish"]
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2">Gerardo Montemayor</h1>
          <p className="text-xl text-muted-foreground mb-4">CS & Aspiring Software Engineer</p>
          
          <div className="flex justify-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              gerardom1226@gmail.com
            </div>
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              (443) 538-0729
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              linkedin.com/in/gerry-montemayor
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              github.com/gerry-montemayor
            </div>
          </div>
          
          <Button onClick={handleDownloadResume}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        {/* Education */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Education</h2>
          {education.map((edu, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <p className="text-primary font-medium">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mt-1">{edu.gpa}</p>
                    <p className="text-sm text-muted-foreground">Relevant Courses: {edu.courses}</p>
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
                      {job.techStack && (
                        <p className="text-sm text-muted-foreground mt-1">Tech Stack: {job.techStack}</p>
                      )}
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

        {/* Projects */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Projects</h2>
          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <p className="text-primary font-medium">{project.organization}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{project.period}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {Array.isArray(project.description) ? (
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      {project.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">{project.description}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills & Other */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Skills & Other</h2>
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

        {/* Hobbies */}
        <Card>
          <CardHeader>
            <CardTitle>Hobbies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {["Soccer", "Guitar", "Running", "Volleyball", "Reading"].map((hobby) => (
                <Badge key={hobby} variant="outline">
                  {hobby}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;