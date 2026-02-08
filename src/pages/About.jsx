import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Briefcase, 
  GraduationCap, 
  Award,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';

const About = () => {
  const experience = [
    {
      company: 'International Registries Inc. (IRI)',
      position: 'Contract Reporting Data Analyst',
      period: 'February 2025 - Present',
      location: 'Reston, VA',
      achievements: [
        'Reduced maritime vessel registry errors by 20% using SQL queries in Oracle databases to validate data per registry standards',
        'Sped up compliance reports by 30% by working with legal, compliance, and operations teams',
        'Automated archival tracking for 500+ folders monthly with zero errors using Power BI dashboards',
        'Improved legal audit and litigation documentation turnaround by 25% using SQL to standardize vessel records'
      ]
    }
  ];

  const education = {
    institution: 'James Madison University',
    degree: 'Bachelor of Science in Integrated Science and Technology',
    concentration: 'Data Science',
    period: '2019 - May 2024',
    location: 'Harrisonburg, VA'
  };

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to data accuracy and validation'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge tools and methodologies'
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Delivering measurable improvements to operations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About Me
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-700 mb-8"></div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2 space-y-6 text-slate-700 text-lg leading-relaxed">
              <p>
                My journey into data analysis began with a fascination for efficiency. As a researcher at James Madison University, I explored facial recognition model optimization, where I benchmarked performance strategies to reduce training times. This experience involved complex dataset preprocessing using NumPy, GPU acceleration, and statistical validation, sparking my interest in the power of refining data inputs to drive computational efficiency.
              </p>
              <p>
                I have since translated that technical mindset into the corporate sector as a Data Reporting Analyst, moving organizations away from manual tracking towards automated intelligence. By engineering Power BI dashboards and writing complex SQL queries, I've successfully improved legal audit turnaround times by 25% and reduced reporting friction for cross-functional teams.
              </p>
              <p>
                I am technically proficient in SQL, Python, and Tableau, with certified expertise in Power BI. I am constantly upskilling and am currently preparing for the Fabric Analytics Engineer Associate exam to deepen my knowledge of modern analytics architecture.
              </p>
              <p>
                I am always looking to connect with others in the data space to discuss data engineering, machine learning, and efficient reporting strategies.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <value.icon className="h-8 w-8 text-cyan-600 mb-3" />
                    <h3 className="text-slate-900 font-bold text-lg mb-2">{value.title}</h3>
                    <p className="text-slate-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-8 w-8 text-cyan-600" />
            <h2 className="text-4xl font-bold text-slate-900">Experience</h2>
          </div>

          {experience.map((job, index) => (
            <Card 
              key={index}
              className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.position}</h3>
                    <p className="text-cyan-600 text-lg font-medium mb-1">{job.company}</p>
                    <p className="text-slate-600 text-sm">{job.location}</p>
                  </div>
                  <Badge className="bg-cyan-600 text-white mt-2 md:mt-0">
                    {job.period}
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <span className="text-cyan-600 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-8 w-8 text-cyan-600" />
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>

          <Card className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{education.degree}</h3>
                  <p className="text-cyan-600 text-lg font-medium mb-1">Concentration: {education.concentration}</p>
                  <p className="text-slate-600 mb-1">{education.institution}</p>
                  <p className="text-slate-600 text-sm">{education.location}</p>
                </div>
                <Badge className="bg-cyan-600 text-white mt-2 md:mt-0">
                  {education.period}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-8 w-8 text-cyan-600" />
            <h2 className="text-4xl font-bold text-slate-900">Certifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-white border-slate-200 hover:border-cyan-600 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-cyan-50">
                    <Award className="h-6 w-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Power BI Data Analyst Associate
                    </h3>
                    <p className="text-slate-600 mb-3">Microsoft</p>
                    <Badge className="bg-cyan-600 text-white">Certified</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-slate-200 hover:border-blue-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50">
                    <Award className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      Fabric Analytics Engineer Associate
                    </h3>
                    <p className="text-slate-600 mb-3">Microsoft</p>
                    <Badge className="bg-blue-700 text-white">In Progress</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;