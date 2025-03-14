
import { Smartphone, Globe, PenTool, Rocket, Zap, Award, Map, CreditCard, Database, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const Services = () => {
  const services: Service[] = [
    {
      icon: <Smartphone size={24} />,
      title: "Flutter App Development",
      description: "Cross-platform applications built with Flutter for Android and iOS with beautiful UI, state management, and seamless performance.",
      color: "bg-gradient-to-br from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Database size={24} />,
      title: "Firebase & Supabase Integration",
      description: "Seamless setup and management of cloud services for authentication, storage, and real-time databases with your Flutter applications.",
      color: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
    },
    {
      icon: <Code size={24} />,
      title: "State Management Solutions",
      description: "Implementation of optimal state management approaches (MVVM, BLoC, Cubit) for scalable, maintainable Flutter applications.",
      color: "bg-gradient-to-br from-violet-500/20 to-purple-500/20"
    },
    {
      icon: <Map size={24} />,
      title: "Google Maps Integration",
      description: "Incorporate location-based features and interactive maps into your application with Google Maps API integration.",
      color: "bg-gradient-to-br from-green-500/20 to-teal-500/20"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Gateway Integration",
      description: "Secure implementation of payment gateways for in-app purchases, subscriptions, and e-commerce functionality.",
      color: "bg-gradient-to-br from-amber-500/20 to-orange-500/20"
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX Design & Implementation",
      description: "Creation of visually appealing, user-friendly interfaces with responsive designs that work across all screen sizes.",
      color: "bg-gradient-to-br from-pink-500/20 to-red-500/20"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-glow">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="w-20 h-1 bg-space-purple mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
            I offer a comprehensive range of Flutter development services to help businesses 
            and individuals create powerful, scalable mobile applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="glass-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-space-purple/20 group border-space-purple/20"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white mb-4 ${service.color}`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-space-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-space-blue/40 rounded-lg p-8 border border-space-purple/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Need a custom Flutter solution?</h3>
            <p className="text-gray-300">
              I'm always open to discussing new projects and creative ideas. 
              Whether you need a complete app from scratch or help with an existing Flutter project,
              feel free to reach out for a consultation.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
            <Card className="glass-card border-space-purple/20">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-space-purple/20 p-3 rounded-full">
                  <Zap size={24} className="text-space-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Fast Development</h4>
                  <p className="text-gray-400 text-sm">Efficient development without sacrificing quality</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="glass-card border-space-purple/20">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="bg-space-purple/20 p-3 rounded-full">
                  <Award size={24} className="text-space-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Published App Experience</h4>
                  <p className="text-gray-400 text-sm">Successfully deployed multiple apps to Google Play & App Store</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-space-purple/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-48 bottom-1/4 w-96 h-96 bg-space-accent/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Services;
