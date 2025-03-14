
import { Check, Code, Database, GitBranch, LayoutTemplate, Rocket, Server, Smartphone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: "Flutter", icon: Smartphone, level: 90 },
    { name: "Dart", icon: Code, level: 85 },
    { name: "Firebase", icon: Database, level: 80 },
    { name: "REST API", icon: Server, level: 75 },
    { name: "Git", icon: GitBranch, level: 70 },
    { name: "UI/UX Design", icon: LayoutTemplate, level: 65 },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block text-glow">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-space-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-gray-300">
              I'm a Flutter Developer with over a year of experience specializing in 
              cross-platform app development. My journey in the tech world is driven by 
              a passion for creating innovative solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-gray-300">
              I hold a Machine Learning certificate from NTI and continuously expand my 
              knowledge to stay at the forefront of mobile development technologies and best practices.
            </p>

            <div className="bg-space-blue/40 p-6 rounded-lg border border-space-purple/20 mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Core Expertise</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Flutter & Dart for cross-platform development
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  MVVM Architecture for scalable applications
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Firebase integration for backend solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  REST API integration for data-rich applications
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Performance optimization for seamless user experience
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  SharedPreferences for efficient local storage
                </li>
              </ul>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-6 text-gradient">Technical Skills</h3>
              
              {skills.map((skill) => (
                <div key={skill.name} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      <skill.icon size={18} className="text-space-accent mr-2" />
                      <span>{skill.name}</span>
                    </div>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-space-blue/70 rounded-full h-2.5">
                    <div 
                      className="bg-gradient-to-r from-space-purple to-space-accent h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}

              <Card className="glass-card mt-8 border-space-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Rocket size={24} className="text-space-accent mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Machine Learning Certificate</h4>
                      <p className="text-gray-400">National Telecommunications Institute (NTI)</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Completed comprehensive training in machine learning algorithms, data analysis, 
                        and implementation techniques for intelligent applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute -right-20 top-1/4 w-80 h-80 bg-space-purple/10 rounded-full blur-3xl"></div>
      <div className="absolute -left-20 bottom-1/4 w-80 h-80 bg-space-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default About;
