
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, Phone, Github, LinkedinIcon, ExternalLink, GraduationCap, Briefcase, Code, Award } from "lucide-react";

const Index = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Data Scientist & Software Engineer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const skills = {
    "Languages": ["Python", "Java", "SQL", "React JS", "HTML/CSS", "Javascript"],
    "Frameworks & Libraries": ["Spring Boot", "Cucumber", "OpenCV", "PyTorch", "Selenium", "Tkinter", "Figma"],
    "Tools": ["PowerBI", "MySQL", "GitHub"],
    "Cloud": ["AWS Lambda", "Azure"]
  };

  const projects = [
    {
      title: "Hybrid Recommender System",
      description: "Kaggle Challenge project implementing advanced recommendation algorithms",
      github: "https://github.com/deepaksomi1986/NCF_RS",
      tech: ["Python", "PyTorch", "Machine Learning"]
    },
    {
      title: "Image Processing Desktop App",
      description: "Desktop application for advanced image processing and manipulation",
      github: "https://github.com/deepaksomi1986/ImProc",
      tech: ["Python", "OpenCV", "Tkinter"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      date: "Dec 2024",
      icon: "☁️"
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      date: "Nov 2022",
      icon: "⚡"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md border-b border-white/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              KJ Deepak Somesh
            </div>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <img 
                  src="/lovable-uploads/10cb7ae9-95e0-4671-8413-13217d689f7b.png" 
                  alt="K J Deepak Somesh"
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white/50 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              K J Deepak Somesh
            </h1>
            <div className="text-2xl md:text-3xl text-blue-600 mb-4 h-12 flex items-center justify-center">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </div>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              📍 Leiden, The Netherlands
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('projects')}
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                onClick={() => scrollToSection('contact')}
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-3 rounded-full transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Me</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I'm a passionate Data Scientist and Software Engineer currently pursuing my Master's in Computer Science: Data Science at Universiteit Leiden. 
            With over 3 years of professional experience at Wipro and a strong foundation in both software development and data science, 
            I specialize in creating intelligent solutions that bridge the gap between complex data insights and practical applications.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <Card key={category} className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    {category === "Languages" && <Code className="mr-2 h-5 w-5 text-blue-600" />}
                    {category === "Frameworks & Libraries" && <Briefcase className="mr-2 h-5 w-5 text-green-600" />}
                    {category === "Tools" && <Award className="mr-2 h-5 w-5 text-purple-600" />}
                    {category === "Cloud" && <GraduationCap className="mr-2 h-5 w-5 text-orange-600" />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 hover:from-blue-200 hover:to-indigo-200 transition-all duration-200">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Professional Experience</h2>
          <div className="space-y-8">
            <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">Software Engineer</h3>
                    <p className="text-xl text-blue-600 mb-2">Wipro</p>
                    <p className="text-gray-600 mb-4">July 2022 – Feb 2025</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Developed and maintained enterprise-level software applications</li>
                      <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                      <li>Implemented automated testing frameworks using Cucumber and Selenium</li>
                      <li>Optimized application performance and scalability</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900">Web Developer Intern</h3>
                    <p className="text-xl text-green-600 mb-2">Verzeo</p>
                    <p className="text-gray-600 mb-4">Jan 2021 – June 2021</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-2">
                      <li>Built responsive web applications using modern JavaScript frameworks</li>
                      <li>Gained hands-on experience with full-stack development</li>
                      <li>Collaborated with design teams to implement user-friendly interfaces</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-blue-200 text-blue-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-gray-300 hover:border-blue-500 hover:text-blue-600" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" className="border-gray-300 hover:border-indigo-500 hover:text-indigo-600">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-gray-600">{cert.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Education</h2>
          <Card className="bg-white/60 backdrop-blur-sm border-white/40 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Master's in Computer Science: Data Science</h3>
              <p className="text-xl text-purple-600 mb-2">Universiteit Leiden</p>
              <p className="text-gray-600">Feb 2025 – Jan 2027</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Mail className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-100">deepaksomi1986@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <Phone className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-100">+31 0619051724</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <LinkedinIcon className="h-8 w-8 text-white mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
              <p className="text-blue-100">k-j-deepak-somesh</p>
            </div>
          </div>
          <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <Mail className="mr-2 h-5 w-5" />
            Send Message
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 K J Deepak Somesh. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
