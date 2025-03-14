
import { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-space-blue/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-glow">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-space-purple mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to explore collaboration opportunities? 
            I'd love to hear from you. Let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="glass-card border-space-purple/20">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-space-dark/60 border-space-purple/30 focus:border-space-accent transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="bg-space-dark/60 border-space-purple/30 focus:border-space-accent transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this regarding?"
                      required
                      className="bg-space-dark/60 border-space-purple/30 focus:border-space-accent transition-colors"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-space-dark/60 border-space-purple/30 focus:border-space-accent transition-colors resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-space-purple hover:bg-space-accent text-white transition-colors"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send size={16} className="ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-6 mb-10">
              <h3 className="text-2xl font-bold text-gradient">Contact Information</h3>
              <p className="text-gray-300">
                Feel free to reach out through the contact form or via my email address. 
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-space-purple/20 rounded-full text-space-accent">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Email</h4>
                    <p className="text-gray-400">contact@cosmiccoder.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-space-purple/20 rounded-full text-space-accent">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-white">Let's Talk</h4>
                    <p className="text-gray-400">I'm available for freelance projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="glass-card border-space-purple/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-space-purple/20 rounded-full text-white hover:bg-space-purple/40 hover:text-space-accent transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-space-purple/20 rounded-full text-white hover:bg-space-purple/40 hover:text-space-accent transition-colors"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-space-purple/20 rounded-full text-white hover:bg-space-purple/40 hover:text-space-accent transition-colors"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-space-purple/20 rounded-full text-white hover:bg-space-purple/40 hover:text-space-accent transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-space-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-space-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Contact;
