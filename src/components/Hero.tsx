
import { ArrowRight, Download, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="container mx-auto pt-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <div className="inline-flex items-center bg-space-purple/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Rocket size={16} className="text-space-accent mr-2" />
              <span className="text-sm">Flutter Developer</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in text-glow">
              Ahmed <span className="text-gradient">Moustafa</span> Ali
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-in max-w-lg">
              Junior Flutter Developer with 2+ years of experience, specializing in cross-platform app development and responsive UI design
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in">
              <Button className="bg-space-purple hover:bg-space-accent text-white rounded-full" size="lg">
                View Projects <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-space-purple text-white hover:bg-space-purple/20">
                Download Resume <Download size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-space-purple/30 backdrop-blur-3xl animate-pulse absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-space-accent/20 backdrop-blur-3xl animate-pulse delay-100 absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              
              <img 
                src="/lovable-uploads/91241d1f-97fb-4776-acbd-fc7fa9d6c264.png" 
                alt="Ahmed Moustafa - Flutter Developer"
                className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-full border-4 border-space-purple/50 shadow-lg shadow-space-purple/30 animate-float z-20"
              />
              
              {/* Tech icons orbiting */}
              <div className="absolute w-full h-full top-0 left-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 bg-space-blue/80 p-2 rounded-full">
                  <img src="https://placehold.co/40x40/6e59a5/ffffff?text=F" alt="Flutter" className="w-8 h-8" />
                </div>
                
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-space-blue/80 p-2 rounded-full">
                  <img src="https://placehold.co/40x40/6e59a5/ffffff?text=D" alt="Dart" className="w-8 h-8" />
                </div>
                
                <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 bg-space-blue/80 p-2 rounded-full">
                  <img src="https://placehold.co/40x40/6e59a5/ffffff?text=FB" alt="Firebase" className="w-8 h-8" />
                </div>
                
                <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2 bg-space-blue/80 p-2 rounded-full">
                  <img src="https://placehold.co/40x40/6e59a5/ffffff?text=API" alt="API" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <a href="#about" className="animate-bounce inline-block">
          <div className="w-8 h-12 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-float"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
