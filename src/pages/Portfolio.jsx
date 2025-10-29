import { useState } from "react";
import Button from "../components/Button";
// import heroBg from "../assets/heroBG.jpg";
// import aboutBg from "../assets/aboutBG.jpg";
import umarPic from "../assets/umars.PNG";
// import educationGB from "../assets/educationGB.jpg";
// import projectBG from "../assets/projectBG.jpg";
import PortfolioPic from "../assets/myp.PNG";
import fashionPic from "../assets/fashion.PNG";
// import servicePic from "../assets/serviceBG.jpg";
// import footerPic from "../assets/footerBG.jpg";


const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    "home",
    "profile",
    "education",
    "projects",
    "services",
    "contact",
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-primary/20 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary animate-fade-in">
              Portfolio
            </h1>
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all duration-300 hover:text-primary hover:scale-110 ${
                      activeSection === item
                        ? "text-primary font-semibold"
                        : "text-foreground"
                    }`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 animate-fade-in relative bg-cover bg-center bg-no-repeat"
        
      >
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-bold mb-6 animate-scale-in">
            Welcome to My{" "}
            <span className="text-primary animate-glow-pulse">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Creative Developer & Designer crafting exceptional digital
            experiences
          </p>
          <div className="flex gap-4 justify-center items-center">
            <Button onClick={() => scrollToSection("contact")}>
              Get In Touch
            </Button>
            <a href="/resume/Umar_Riaz_Resume.pdf" download="Umar_Riaz_Resume.pdf">
              <Button variant="outline">Download Resume</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section
        id="profile"
        className="relative min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-cover bg-center bg-no-repeat"
        
      >
        {/* Dark transparent overlay (for opacity control) */}
        

        {/* Content (above overlay) */}
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Avatar Section */}
            <div className="animate-fade-in">
              <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 overflow-hidden">
                <img
                  src={umarPic} // 👈 yahan apni image ka variable ya path do
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="space-y-6 animate-scale-in">
              <h3 className="text-3xl font-semibold">UMAR RIAZ</h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate Front-End Web Developer focused on building modern
                and responsive web interfaces. Specialized in React, Next.js,
                and cutting-edge web technologies. Dedicated to crafting
                user-friendly and visually appealing digital experiences. Always
                eager to learn, innovate, and bring ideas to life through code.
              </p>

              <div className="flex flex-wrap gap-4">
                {["HTML", "JavaScript", "React.js", "Next.js", "Tailwind"].map(
                  (skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-lg hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section
        id="education"
        className="relative min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-cover bg-center bg-no-repeat"
        
      >
        

        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Education
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                degree: "Master of Computer Science",
                institution: "Gomal University",
                year: "2021 - 2023",
                description: "Specialized in Web Development and AI",
              },
              {
                degree: "Bachelor of Computer Science",
                institution: "University of Sargodha",
                year: "2016 - 2018",
                description:
                  "Foundation in programming and software engineering",
              },
            ].map((edu, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              >
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  {edu.degree}
                </h3>
                <p className="text-lg text-foreground mb-2">
                  {edu.institution}
                </p>
                <p className="text-muted-foreground mb-4">{edu.year}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="relative min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-cover bg-center bg-no-repeat"
             >
        
       <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                description:
                  "E-commerce online shopping solution with all features which is mobile reponsive and order products from all over the world to your door step.",
                tech: "HTML, CSS, Javascript, React.js, Tailwind",
                link: "https://style-hub-ekaq.vercel.app/",
                Image: fashionPic
              },
              {
                title: "My Personal Portfolio",
                description:
                  "A creative Front-End Web Developer turning ideas into interactive digital experiences. Focused on crafting elegant, fast, and responsive websites with React and Tailwind CSS.",
                tech: "HTML, CSS, Javascript, React.js, Tailwind",
                link: "https://my-portfolio-website-bml8.vercel.app/",
                Image: PortfolioPic
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 hover:-translate-y-2 animate-scale-in"
              >
                <div className="w-full h-48 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg mb-4 flex items-center justify-center text-4xl">
                  <img 
                  src={project.Image}
                   alt="" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-primary">{project.tech}</p>
                <a
                  href={project.link}
                  className="inline-block mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:opacity-90 transition-all duration-300"

                >
                  Live Preview
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-cover bg-center bg-no-repeat"
        

      >
        
        <div className="container mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description:
                  "Custom websites and web applications built with modern technologies",
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description:
                  "Beautiful and intuitive user interfaces that engage users",
              },
              {
                icon: "📱",
                title: "Responsive Design",
                description:
                  "Mobile-first approach ensuring perfect experience on all devices",
              },
              {
                icon: "⚡",
                title: "Performance Optimization",
                description:
                  "Fast loading times and smooth interactions for better user experience",
              },
              {
                icon: "🔧",
                title: "Maintenance & Support",
                description:
                  "Ongoing support and updates to keep your project running smoothly",
              },
              {
                icon: "🚀",
                title: "Consulting",
                description:
                  "Expert advice on technology stack and architecture decisions",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in text-center"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative min-h-screen flex items-center justify-center pt-20 animate-fade-in bg-cover bg-center bg-no-repeat mb-5"
        

      >
        
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6 animate-scale-in">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300 hover:border-primary/50"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <Button className="w-full">Send Message</Button>
            </form>

            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: "📧", title: "Email", value: "umarch9297@gmail.com" },
                { icon: "📱", title: "Phone", value: "+923477405281" },
                { icon: "📍", title: "Location", value: "Urban Area, Sargodha" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="p-4 bg-card border border-primary/20 rounded-lg hover:border-primary hover:scale-105 transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{contact.icon}</div>
                  <h4 className="font-semibold text-primary mb-1">
                    {contact.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {contact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-primary/20 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Umar Riaz Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
