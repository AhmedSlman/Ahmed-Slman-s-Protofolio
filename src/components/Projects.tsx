
import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink?: string;
  liveLink?: string;
}

const Projects = () => {
  const [projects] = useState<Project[]>([
    {
      id: 1,
      title: "Sportat 365",
      description: "Sports app with user accounts, video uploads, playback, sharing, and social engagement features including voting, commenting & push notifications.",
      image: "https://placehold.co/800x600/1a1f2c/9b87f5?text=Sportat+365",
      technologies: ["Flutter", "Firebase", "REST API", "Backend Integration"],
      liveLink: "https://play.google.com/store/apps/details?id=com.fourthpyramid.sportat365sportsubhi"
    },
    {
      id: 2,
      title: "HR Insight",
      description: "HR Management System with employee tracking, performance management and communication tools. Recently updated with bug fixes and performance enhancements.",
      image: "https://placehold.co/800x600/1a1f2c/33c3f0?text=HR+Insight",
      technologies: ["Flutter", "Dart", "Firebase", "Employee Management"],
      liveLink: "https://play.google.com/store/apps/details?id=com.HRInsight"
    },
    {
      id: 3,
      title: "Cognme",
      description: "Alzheimer's app for my graduation project built with MVVM + Cubit. AI-powered predictive insights for personalized care, with features like reminders, appointments & location tracking.",
      image: "https://placehold.co/800x600/1a1f2c/6e59a5?text=Cognme",
      technologies: ["Flutter", "MVVM", "Cubit", "AI Integration"],
      githubLink: "https://github.com/AhmedSlman/Cognme"
    },
    {
      id: 4,
      title: "Legends Agency Portfolio",
      description: "A responsive portfolio website for Legends Agency, developed using Flutter Web with BLoC for efficient state management and scalability.",
      image: "https://placehold.co/800x600/1a1f2c/9b87f5?text=Legends+Agency",
      technologies: ["Flutter Web", "BLoC", "Responsive Design"],
      githubLink: "https://github.com/AhmedSlman/LegendsAgancy",
      liveLink: "http://legendsagancy.com/"
    },
    {
      id: 5,
      title: "Creen App",
      description: "Sports & Nutrition app built with MVVM + Cubit for a scalable architecture. Features chat functionality for enhanced user interaction.",
      image: "https://placehold.co/800x600/1a1f2c/33c3f0?text=Creen+App",
      technologies: ["Flutter", "MVVM", "Cubit", "Chat Integration"],
      liveLink: "https://play.google.com/store/apps/details?id=com.creenprogram"
    },
    {
      id: 6,
      title: "APC Sales Connect",
      description: "Sales Management App that helps sales representatives plan visits, track progress, and manage appointments efficiently.",
      image: "https://placehold.co/800x600/1a1f2c/6e59a5?text=APC+Sales",
      technologies: ["Flutter", "Sales Management", "Tracking", "Scheduling"],
      liveLink: "https://play.google.com/store/apps/details?id=com.mandopy.apc_sales"
    },
    {
      id: 7,
      title: "Pets Game",
      description: "Interactive Pet Game developed using Clean Architecture + BLoC. A fun game that keeps pets entertained with animated interactions.",
      image: "https://placehold.co/800x600/1a1f2c/9b87f5?text=Pets+Game",
      technologies: ["Flutter", "Clean Architecture", "BLoC", "Animations"],
      liveLink: "https://play.google.com/store/apps/details?id=com.fourthpyramid.petsgame"
    },
    {
      id: 8,
      title: "Esjod",
      description: "Prayer & Quran App providing accurate prayer times based on location. Includes Quran reading & daily Adhkar features.",
      image: "https://placehold.co/800x600/1a1f2c/33c3f0?text=Esjod",
      technologies: ["Flutter", "Location Services", "Quran API", "Prayer Times"],
      liveLink: "https://play.google.com/store/apps/details?id=com.fourthpyramid.esjodapp"
    }
  ]);

  // Get first 4 projects for the initial display
  const displayedProjects = projects.slice(0, 4);

  return (
    <section id="projects" className="py-20 bg-space-blue/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-glow">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-space-purple mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Showcasing some of my best work. These projects demonstrate my skills
            in Flutter development and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <Card 
              key={project.id} 
              className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-space-purple/20 group"
            >
              <div className="relative overflow-hidden h-60">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-space-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full border-white/50 bg-black/50 hover:bg-black/80">
                          <Github size={20} />
                        </Button>
                      </a>
                    )}
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="rounded-full border-white/50 bg-black/50 hover:bg-black/80">
                          <ExternalLink size={20} />
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="ghost" size="icon" className="text-space-accent -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight size={20} />
                      </Button>
                    </a>
                  )}
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-space-purple/20 rounded-full text-xs text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#projects" className="inline-block">
            <Button 
              variant="outline" 
              className="rounded-full border-space-purple hover:bg-space-purple/20 hover:text-space-accent"
            >
              View All Projects
              <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -left-10 top-1/3 w-40 h-40 rounded-full bg-space-accent opacity-10 blur-3xl"></div>
        <div className="absolute right-0 bottom-1/4 w-60 h-60 rounded-full bg-space-purple opacity-10 blur-3xl"></div>
      </div>
    </section>
  );
};

export default Projects;
