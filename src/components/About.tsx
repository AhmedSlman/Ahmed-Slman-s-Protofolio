
import { Check, Code, Database, GitBranch, LayoutTemplate, Rocket, Server, Smartphone, Globe, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: "Flutter", icon: Smartphone, level: 90 },
    { name: "Dart", icon: Code, level: 88 },
    { name: "Firebase", icon: Database, level: 85 },
    { name: "REST API", icon: Server, level: 82 },
    { name: "MVVM/BLoC/Cubit", icon: Code, level: 85 },
    { name: "Git & GitHub", icon: GitBranch, level: 80 },
    { name: "UI/UX Design", icon: LayoutTemplate, level: 75 },
    { name: "Supabase", icon: Database, level: 70 },
  ];

  const experiences = [
    {
      title: "Junior Flutter Developer",
      company: "Fourth Pyramid",
      period: "Present",
      location: "Mansoura, Egypt",
      description: "Developing cross-platform mobile apps using Flutter, collaborating with teams to write clean, reusable code, and integrating third-party APIs."
    },
    {
      title: "Freelance Flutter Developer & Founder",
      company: "Nexus Agency",
      period: "Present",
      location: "Remote",
      description: "Founder of Nuxes, a freelance team specializing in Flutter mobile app development. Managing projects, assigning tasks, and ensuring high-quality delivery."
    }
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-gray-300">
              I'm a Junior Flutter Developer with over two years of experience specializing in 
              cross-platform app development. My passion lies in creating innovative solutions 
              that solve real-world problems through beautiful, responsive interfaces.
            </p>
            
            <p className="text-lg text-gray-300">
              Based in Mansoura, Egypt, I'm currently working with Fourth Pyramid and running my
              own freelance team (Nuxes) to deliver high-quality mobile applications. I hold a 
              Bachelor's Degree in Software Engineering from Mansoura University.
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
                  State Management (MVVM, BLoC, Cubit) for scalable apps
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Firebase & Supabase for backend solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  REST API integration & Google Maps implementation
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Payment gateway integration & responsive UI design
                </li>
                <li className="flex items-center text-gray-300">
                  <Check size={18} className="text-space-accent mr-2" />
                  Performance optimization & app publishing
                </li>
              </ul>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-gradient">Work Experience</h3>
              {experiences.map((experience, index) => (
                <Card key={index} className="glass-card mb-4 border-space-purple/20">
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Briefcase size={24} className="text-space-accent mr-3 mt-1" />
                      <div>
                        <div className="flex flex-wrap justify-between items-start">
                          <h4 className="text-lg font-semibold">{experience.title}</h4>
                          <span className="text-sm text-gray-400">{experience.period}</span>
                        </div>
                        <p className="text-gray-400">{experience.company} | {experience.location}</p>
                        <p className="text-gray-500 text-sm mt-2">{experience.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
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
                        Comprehensive training in machine learning algorithms, data analysis, 
                        and implementation techniques for intelligent applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card mt-4 border-space-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Globe size={24} className="text-space-accent mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Education</h4>
                      <p className="text-gray-400">Bachelor's Degree in Software Engineering</p>
                      <p className="text-gray-500 text-sm">
                        Faculty of Computer & Information Sciences, Mansoura University (2020 – 2024)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card mt-4 border-space-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Code size={24} className="text-space-accent mr-3 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Additional Certification</h4>
                      <p className="text-gray-400">Mobile App Development with Flutter</p>
                      <p className="text-gray-500 text-sm">
                        Consulting of Computers and Information Center (CCIC)
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
