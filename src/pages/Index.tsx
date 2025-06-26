import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Download, Mail, Phone, Github, LinkedinIcon, ExternalLink, GraduationCap, Briefcase, Code, Award, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import StaggeredContainer from "@/components/StaggeredContainer";

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
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700/30 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
              KJ Deepak Somesh
            </div>
            <div className="hidden md:flex space-x-6">
              {["About", "Skills", "Experience", "Projects", "Education", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-blue-400 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6000&q=80')"
          }}
        ></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-slate-800/90 to-gray-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20 animate-pulse"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="animate-fade-in">
            {/* Profile Photo */}
            <AnimatedSection animation="zoom-in" duration={1000}>
              <div className="mb-8 flex justify-center">
                <div className="relative group">
                  <img 
                    src="/lovable-uploads/10cb7ae9-95e0-4671-8413-13217d689f7b.png" 
                    alt="K J Deepak Somesh"
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-gray-700/50 hover:scale-110 transition-all duration-500 group-hover:shadow-blue-500/25"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/30 to-purple-600/30 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-all duration-500"></div>
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200} duration={1000}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                K J Deepak Somesh
              </h1>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={400} duration={800}>
              <div className="text-2xl md:text-3xl text-blue-400 mb-4 h-12 flex items-center justify-center">
                {displayedText}
                <span className="animate-pulse ml-1 text-purple-400">|</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-up" delay={600} duration={800}>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                📍 Leiden, The Netherlands
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="bounce-in" delay={800} duration={1000}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('projects')}
                  className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110"
                >
                  Contact Me
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection animation="rotate-in" duration={1000}>
            <h2 className="text-4xl font-bold text-white mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          </AnimatedSection>
          <AnimatedSection animation="fade-up" delay={300} duration={1000}>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
              I'm a passionate Data Scientist and Software Engineer currently pursuing my Master's in Computer Science: Data Science at Universiteit Leiden. 
              With over 3 years of professional experience at Wipro and a strong foundation in both software development and data science, 
              I specialize in creating intelligent solutions that bridge the gap between complex data insights and practical applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-purple-900/10 to-blue-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="zoom-in" duration={1000}>
            <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          </AnimatedSection>
          <StaggeredContainer 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            delay={200}
            animation="scale-up"
          >
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center group-hover:text-blue-400 transition-colors duration-300">
                    {category === "Languages" && <Code className="mr-2 h-5 w-5 text-blue-400 group-hover:animate-pulse" />}
                    {category === "Frameworks & Libraries" && <Briefcase className="mr-2 h-5 w-5 text-green-400 group-hover:animate-pulse" />}
                    {category === "Tools" && <Award className="mr-2 h-5 w-5 text-purple-400 group-hover:animate-pulse" />}
                    {category === "Cloud" && <GraduationCap className="mr-2 h-5 w-5 text-orange-400 group-hover:animate-pulse" />}
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-200 hover:from-blue-800/50 hover:to-purple-800/50 transition-all duration-300 transform hover:scale-110"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 to-blue-900/10"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection animation="slide-up" duration={1000}>
            <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Professional Experience</h2>
          </AnimatedSection>
          <div className="space-y-8">
            <AnimatedSection animation="fade-left" delay={200} duration={1000}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">Software Engineer</h3>
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
            
            <AnimatedSection animation="fade-right" delay={400} duration={1000}>
              <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-green-500/20 transition-all duration-500 transform hover:-translate-y-2 group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-3 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">Web Developer Intern</h3>
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
      <section id="projects" className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-indigo-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="bounce-in" duration={1000}>
            <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Featured Projects</h2>
          </AnimatedSection>
          <StaggeredContainer 
            className="grid md:grid-cols-2 gap-8"
            delay={300}
            animation="zoom-in"
          >
            {projects.map((project) => (
              <Card key={project.title} className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, index) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-purple-400/30 text-purple-300 hover:border-purple-400 hover:text-purple-200 transition-all duration-300 transform hover:scale-110"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-purple-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all duration-300 transform hover:scale-105" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:border-indigo-400 hover:text-indigo-400 hover:bg-indigo-400/10 transition-all duration-300 transform hover:scale-105">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredContainer>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 px-6 bg-gray-800/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-orange-900/10 to-red-900/10"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection animation="rotate-in" duration={1000}>
            <h2 className="text-4xl font-bold text-center text-white mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Certifications</h2>
          </AnimatedSection>
          <AnimatedSection animation="scale-up" delay={300} duration={1000}>
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
                    <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-500 h-full transform hover:-translate-y-2 hover:scale-105 group">
                      <CardContent className="p-6 text-center flex flex-col justify-between h-full">
                        <div>
                          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{cert.icon}</div>
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">{cert.title}</h3>
                          <p className="text-orange-400 font-medium mb-2">{cert.issuer}</p>
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
                className="h-8 w-8 rounded-full border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 transform hover:scale-110"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!carouselApi?.canScrollPrev()}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: slideCount }, (_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 transform hover:scale-125 ${
                      index === currentSlide 
                        ? "bg-orange-400 w-6 shadow-lg shadow-orange-400/50" 
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    onClick={() => carouselApi?.scrollTo(index)}
                  />
                ))}
              </div>
              
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 rounded-full border-gray-600 text-gray-300 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300 transform hover:scale-110"
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
      <section id="education" className="py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/10 to-purple-900/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection animation="zoom-in" duration={1000}>
            <h2 className="text-4xl font-bold text-white mb-12 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Education</h2>
          </AnimatedSection>
          <AnimatedSection animation="bounce-in" delay={300} duration={1000}>
            <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700/40 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 group">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="bg-gradient-to-r from-pink-600 to-purple-600 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">Master's in Computer Science: Data Science</h3>
                <p className="text-xl text-pink-400 mb-2">Universiteit Leiden</p>
                <p className="text-gray-400">Feb 2025 – Jan 2027</p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gradient-to-br from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <AnimatedSection animation="slide-up" duration={1000}>
            <h2 className="text-4xl font-bold text-white mb-12">Get In Touch</h2>
          </AnimatedSection>
          <StaggeredContainer 
            className="grid md:grid-cols-3 gap-8 mb-12"
            delay={200}
            animation="zoom-in"
          >
            {[
              { icon: Mail, title: "Email", content: "deepaksomi1986@gmail.com" },
              { icon: Phone, title: "Phone", content: "+31 0619051724" },
              { icon: LinkedinIcon, title: "LinkedIn", content: "k-j-deepak-somesh" }
            ].map((contact) => (
              <div key={contact.title} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group">
                <contact.icon className="h-8 w-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">{contact.title}</h3>
                <p className="text-blue-200">{contact.content}</p>
              </div>
            ))}
          </StaggeredContainer>
          <AnimatedSection animation="bounce-in" delay={600} duration={1000}>
            <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25">
              <Mail className="mr-2 h-5 w-5" />
              Send Message
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedSection animation="fade-up" duration={800}>
            <p className="text-gray-400 hover:text-gray-300 transition-colors duration-300">
              © 2024 K J Deepak Somesh. All rights reserved. Built with React & Tailwind CSS.
            </p>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  );
};

export default Index;
