import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Database, 
  BarChart3, 
  Code, 
  Cloud, 
  GitBranch,
  Award,
  Download,
  Mail,
  Linkedin,
  Github,
  ChevronRight,
  Brain,
  Server
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'SQL', icon: Database, color: '#0891b2' },
    { name: 'Python', icon: Code, color: '#1e40af' },
    { name: 'Power BI', icon: BarChart3, color: '#0891b2' },
    { name: 'Tableau', icon: BarChart3, color: '#1e40af' },
    { name: 'AWS', icon: Cloud, color: '#0891b2' },
    { name: 'Azure', icon: Cloud, color: '#1e40af' },
    { name: 'Git', icon: GitBranch, color: '#0891b2' },
    { name: 'Machine Learning', icon: Brain, color: '#1e40af' },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Facial Recognition Model Optimization',
      description: 'Enhanced facial recognition systems using CategoricalFocalCrossEntropy to address class imbalance, improving model accuracy on diverse datasets.',
      tech: ['Python', 'NumPy', 'Google Cloud', 'Machine Learning'],
      impact: 'Optimized model performance with advanced loss functions',
      year: '2023-2024'
    },
    {
      id: 2,
      title: 'Community Tool Box Analysis',
      description: 'Analyzed 2,000+ questions from University of Kansas dataset, proposing a Q&A chatbot using knowledge graphs to reduce repeat questions by 20%.',
      tech: ['Python', 'NLP', 'Neo4j', 'OpenKG', 'GRAKN.AI'],
      impact: 'Identified 40% of queries seeking existing resources',
      year: '2023-2024'
    }
  ];

  const certifications = [
    { name: 'Power BI Data Analyst Associate', status: 'Certified', issuer: 'Microsoft' },
    { name: 'Fabric Analytics Engineer Associate', status: 'In Progress', issuer: 'Microsoft' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
        <div className={`max-w-6xl w-full transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight">
                  Johnny Duenas
                </h1>
                <p className="text-xl md:text-2xl text-cyan-600 font-medium">
                  Contract Data Reporting Analyst
                </p>
                <p className="text-lg text-slate-600">
                  James Madison University Alumni
                </p>
              </div>
              
              <p className="text-slate-700 text-lg leading-relaxed">
                Transforming complex data into actionable insights. Specialized in SQL, Power BI, and data reporting with a proven track record of improving operational efficiency and reducing errors.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact">
                  <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-600/30">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Me
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                  onClick={() => window.open('#', '_blank')}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.linkedin.com/in/johnny-duenas-884314208" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                </a>
                <a 
                  href="https://github.com/JohnnyD01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                </a>
                <a 
                  href="mailto:johnnyduenas5@gmail.com"
                  className="p-3 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 text-slate-600 group-hover:text-cyan-600 transition-colors" />
                </a>
              </div>
            </div>

            {/* Right: Professional Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#0891b2] to-[#1e40af] rounded-2xl opacity-50 group-hover:opacity-100 blur transition-all duration-500"></div>
                <img 
                  src="https://customer-assets.emergentagent.com/job_dev-hub-17/artifacts/smnwsd10_Cover%20Photo.jpg"
                  alt="Johnny Duenas"
                  className="relative w-64 md:w-72 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Proficient in modern data analytics tools and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={index}
                className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div 
                    className="p-4 rounded-full transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${skill.color}20` }}
                  >
                    <skill.icon 
                      className="h-8 w-8 transition-colors duration-300" 
                      style={{ color: skill.color }}
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {skill.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-slate-600 text-lg">
                Showcasing research and data analysis work
              </p>
            </div>
            <Link to="/projects">
              <Button 
                variant="ghost" 
                className="text-cyan-600 hover:text-white hover:bg-cyan-600 transition-all duration-300 group"
              >
                View All Projects
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.id}
                className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group cursor-pointer overflow-hidden"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="border-cyan-600 text-cyan-600">
                      {project.year}
                    </Badge>
                    <Server className="h-6 w-6 text-cyan-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-cyan-600 font-medium mb-2">
                      {project.impact}
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <Badge 
                        key={i} 
                        variant="secondary" 
                        className="bg-cyan-50 text-cyan-700 border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Certifications
            </h2>
            <p className="text-slate-600 text-lg">
              Professional credentials and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                <CardContent className="p-8 flex items-start space-x-6">
                  <div className="p-4 rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-colors">
                    <Award className="h-8 w-8 text-cyan-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-slate-600 mb-3">{cert.issuer}</p>
                    <Badge 
                      className={cert.status === 'Certified' 
                        ? 'bg-cyan-600 text-white' 
                        : 'bg-blue-700 text-white'
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Looking for a data analyst who can turn complex datasets into actionable insights? Let's connect and discuss how I can help your organization.
            </p>
            <Link to="/contact">
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-600/30">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;