
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
      title: "Sportat App",
      description: "A sports management application for organizing matches, tracking stats, and connecting players.",
      image: "https://placehold.co/800x600/1a1f2c/9b87f5?text=Sportat+App",
      technologies: ["Flutter", "Firebase", "REST API", "SharedPreferences"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "E-Commerce Mobile App",
      description: "A comprehensive e-commerce solution with product catalog, cart functionality, and secure payment integration.",
      image: "https://placehold.co/800x600/1a1f2c/33c3f0?text=E-Commerce+App",
      technologies: ["Flutter", "Dart", "Firebase", "Stripe API"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "AI Weather Forecast",
      description: "Smart weather application that uses machine learning to provide accurate forecasts and personalized recommendations.",
      image: "https://placehold.co/800x600/1a1f2c/6e59a5?text=AI+Weather+App",
      technologies: ["Flutter", "ML Models", "Weather API", "MVVM"],
      githubLink: "#",
      liveLink: "#"
    },
    {
      id: 4,
      title: "Travel Companion",
      description: "A travel planning app with itinerary management, local guides, and offline map functionality.",
      image: "https://placehold.co/800x600/1a1f2c/9b87f5?text=Travel+App",
      technologies: ["Flutter", "Google Maps API", "Firebase", "Local Storage"],
      githubLink: "#",
      liveLink: "#"
    },
  ]);

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
          {projects.map((project) => (
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
                      <Button variant="outline" size="icon" className="rounded-full border-white/50 bg-black/50 hover:bg-black/80">
                        <Github size={20} />
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button variant="outline" size="icon" className="rounded-full border-white/50 bg-black/50 hover:bg-black/80">
                        <ExternalLink size={20} />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <Button variant="ghost" size="icon" className="text-space-accent -mr-2 -mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={20} />
                  </Button>
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
          <Button 
            variant="outline" 
            className="rounded-full border-space-purple hover:bg-space-purple/20 hover:text-space-accent"
          >
            View All Projects
            <ArrowUpRight size={16} className="ml-2" />
          </Button>
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
