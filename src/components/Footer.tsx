
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-blue/40 border-t border-space-purple/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">Ahmed Moustafa</h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Flutter Developer crafting beautiful cross-platform experiences with a passion for mobile innovation
            </p>
            
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:ahmedslman151@gmail.com" className="hover:text-space-accent transition-colors">
                  ahmedslman151@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+201040677295" className="hover:text-space-accent transition-colors">
                  +20 104 067 7295
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                <span>Mansoura, Daqahliyah, Egypt</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/AhmedSlman" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
                <Github size={20} />
              </Button>
            </a>
            <a href="https://linkedin.com/in/AhmedSlman" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
                <Linkedin size={20} />
              </Button>
            </a>
            <a href="mailto:ahmedslman151@gmail.com">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
                <Mail size={20} />
              </Button>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} Ahmed Moustafa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
