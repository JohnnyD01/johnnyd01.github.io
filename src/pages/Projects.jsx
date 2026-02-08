import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { ExternalLink, Github, Code2, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Facial Recognition Model Optimization',
      description: 'Conducted applied data science research on enhancing facial recognition systems in imbalanced datasets, with the thesis that advanced loss functions like Categorical Focal Cross Entropy can effectively mitigate minority class underrepresentation to improve overall model accuracy.',
      longDescription: 'Implemented machine learning modifications using CategoricalFocalCrossEntropy to address class imbalance, resulting in enhanced model performance on diverse datasets. Applied NumPy for efficient dataset preprocessing and size reduction, accelerating training and inference times while maintaining data integrity. Deployed the optimized model on Google Cloud Platform, enabling scalable, real-time facial recognition applications with improved efficiency.',
      tech: ['Python', 'NumPy', 'Google Cloud', 'Machine Learning', 'TensorFlow'],
      period: '2023 - 2024',
      icon: Brain,
      highlights: [
        'Enhanced model accuracy on minority classes',
        'Reduced preprocessing time significantly',
        'Deployed scalable solution on GCP',
        'Research-backed methodology'
      ]
    },
    {
      id: 2,
      title: 'Community Tool Box Analysis',
      description: 'Analyzed a University of Kansas Community Tool Box dataset (2,000+ questions, 2003-2021), identifying that 40% of queries sought existing resources, indicating a user awareness gap.',
      longDescription: 'Proposed a Q&A chatbot using knowledge graphs with Neo4j, OpenKG, or GRAKN.AI to map toolkit relationships, delivering tailored answers to reduce repeat questions by 20%. Conducted comprehensive natural language processing analysis to identify common query patterns and user needs.',
      tech: ['Python', 'NLP', 'Neo4j', 'OpenKG', 'GRAKN.AI', 'Knowledge Graphs'],
      period: '2023 - 2024',
      icon: Database,
      highlights: [
        'Analyzed 2,000+ user questions',
        'Identified 40% resource awareness gap',
        'Proposed 20% reduction in repeat queries',
        'Designed knowledge graph solution'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Projects
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-700 mb-6"></div>
          <p className="text-slate-600 text-lg max-w-3xl">
            A showcase of my research and data analysis projects, demonstrating expertise in machine learning, data preprocessing, and analytics architecture.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-xl transition-all duration-500 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Left: Icon Section */}
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200">
                    <div className="p-8 rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-all duration-500 group-hover:scale-110">
                      <project.icon className="h-16 w-16 text-cyan-600" />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="md:col-span-2 p-8 md:p-12 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <Badge variant="outline" className="border-cyan-600 text-cyan-600">
                        {project.period}
                      </Badge>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
                      {project.title}
                    </h2>

                    <p className="text-slate-700 leading-relaxed">
                      {project.description}
                    </p>

                    <p className="text-slate-600 leading-relaxed text-sm">
                      {project.longDescription}
                    </p>

                    {/* Highlights */}
                    <div className="pt-4 border-t border-slate-200">
                      <h4 className="text-slate-900 font-semibold mb-3">Key Highlights</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                            <span className="text-cyan-600 mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-slate-900 font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className="bg-cyan-50 text-cyan-700 border-none hover:bg-cyan-100 transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
            <CardContent className="p-12 text-center">
              <Code2 className="h-12 w-12 text-cyan-600 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Looking for More?
              </h3>
              <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                These projects represent my academic research and development work. I'm actively working on new data analysis and machine learning projects.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  variant="outline"
                  className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300"
                  onClick={() => window.open('https://github.com/JohnnyD01', '_blank')}
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
                <Button 
                  className="bg-cyan-600 hover:bg-cyan-700 text-white transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;