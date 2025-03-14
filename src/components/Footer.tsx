
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-blue/40 border-t border-space-purple/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gradient">CosmicCoder</h3>
            <p className="text-gray-400 mt-2 max-w-md">
              Flutter Developer crafting beautiful cross-platform experiences with a passion for mobile innovation
            </p>
          </div>
          
          <div className="flex space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
              <Github size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
              <Linkedin size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
              <Twitter size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full text-white hover:bg-space-purple/20 hover:text-space-accent transition-colors">
              <Mail size={20} />
            </Button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400 text-sm">
          <p>© {currentYear} CosmicCoder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
