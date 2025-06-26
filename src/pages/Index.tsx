import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Download, Mail, Phone, Github, LinkedinIcon, ExternalLink, GraduationCap, Briefcase, Code, Award, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Index = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
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

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

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
      icon: "☁️",
      issuer: "Amazon Web Services"
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      date: "Nov 2022",
      icon: "⚡",
      issuer: "Microsoft"
    },
    {
      title: "Google Cloud Professional Data Engineer",
      date: "Sep 2023",
      icon: "🔧",
      issuer: "Google Cloud"
    },
    {
      title: "Certified Kubernetes Administrator",
      date: "Mar 2023",
      icon: "🚢",
      issuer: "CNCF"
    },
    {
      title: "Python for Data Science Certificate",
      date: "Jan 2022",
      icon: "🐍",
      issuer: "IBM"
    },
    {
      title: "Machine Learning Specialization",
      date: "Aug 2023",
      icon: "🤖",
      issuer: "Stanford University"
    },
    {
      title: "Docker Certified Associate",
      date: "Jun 2023",
      icon: "🐳",
      issuer: "Docker Inc"
    },
    {
      title: "TensorFlow Developer Certificate",
      date: "Apr 2023",
      icon: "🧠",
      issuer: "Google"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/20 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              KJ Deepak Somesh
            </div>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 font-medium"
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
                  className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-gray-700/50 hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-indigo-600/20"></div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              K J Deepak Somesh
            </h1>
            <div className="text-2xl md:text-3xl text-blue-400 mb-4 h-12 flex items-center justify-center">
              {displayedText}
              <span className="animate-pulse ml-1">|</span>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
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
      <section id="about" className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              I'm a passionate Data Scientist and Software Engineer currently pursuing my Master's in Computer Science: Data Science at Universiteit Leiden. 
              With over 3 years of professional experience at Wipro and a strong foundation in both software development and data science, 
              I specialize in creating intelligent solutions that bridge the gap between complex data insights and practical applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Skills & Technologies</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <AnimatedSection 
                key={category} 
                animation="fade-up" 
                delay={index * 100}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      {category === "Languages" && <Code className="mr-2 h-5 w-5 text-blue-400" />}
                      {category === "Frameworks & Libraries" && <Briefcase className="mr-2 h-5 w-5 text-green-400" />}
                      {category === "Tools" && <Award className="mr-2 h-5 w-5 text-purple-400" />}
                      {category === "Cloud" && <GraduationCap className="mr-2 h-5 w-5 text-orange-400" />}
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="bg-gradient-to-r from-blue-900/50 to-indigo-900/50 text-blue-200 hover:from-blue-800/50 hover:to-indigo-800/50 transition-all duration-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Professional Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            <AnimatedSection animation="fade-left">
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-3 rounded-full">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">Software Engineer</h3>
                      <p className="text-xl text-blue-400 mb-2">Wipro</p>
                      <p className="text-gray-400 mb-4">July 2022 – Feb 2025</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Developed and maintained enterprise-level software applications</li>
                        <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
                        <li>Implemented automated testing frameworks using Cucumber and Selenium</li>
                        <li>Optimized application performance and scalability</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-right">
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white">Web Developer Intern</h3>
                      <p className="text-xl text-green-400 mb-2">Verzeo</p>
                      <p className="text-gray-400 mb-4">Jan 2021 – June 2021</p>
                      <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>Built responsive web applications using modern JavaScript frameworks</li>
                        <li>Gained hands-on experience with full-stack development</li>
                        <li>Collaborated with design teams to implement user-friendly interfaces</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Featured Projects</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={index} 
                animation="scale-up" 
                delay={index * 200}
              >
                <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="border-blue-400/30 text-blue-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-indigo-400 hover:text-indigo-400">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-center text-white mb-12">Certifications</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
              setApi={setCarouselApi}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {certifications.map((cert, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-lg transition-all duration-300 h-full">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                        <div>
                          <div className="text-4xl mb-4">{cert.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                          <p className="text-blue-400 font-medium mb-2">{cert.issuer}</p>
                        </div>
                        <p className="text-gray-400 mt-auto">{cert.date}</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Custom Pagination Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!carouselApi?.canScrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: slideCount }, (_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? "bg-blue-400 w-6" 
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-600 text-gray-300 hover:border-blue-400 hover:text-blue-400"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!carouselApi?.canScrollNext()}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
          </AnimatedSection>
          <AnimatedSection animation="scale-up">
            <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-full">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Master's in Computer Science: Data Science</h3>
                <p className="text-xl text-purple-400 mb-2">Universiteit Leiden</p>
                <p className="text-gray-400">Feb 2025 – Jan 2027</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-900 to-indigo-900">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl font-bold text-white mb-12">Get In Touch</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Mail, title: "Email", content: "deepaksomi1986@gmail.com" },
              { icon: Phone, title: "Phone", content: "+31 0619051724" },
              { icon: LinkedinIcon, title: "LinkedIn", content: "k-j-deepak-somesh" }
            ].map((contact, index) => (
              <AnimatedSection 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <contact.icon className="h-8 w-8 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-blue-200">{contact.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-gray-400">
              © 2024 K J Deepak Somesh. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
