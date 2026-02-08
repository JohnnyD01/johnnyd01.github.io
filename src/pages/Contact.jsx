import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { toast } from '../hooks/use-toast';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  Send,
  CheckCircle2
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'johnnyduenas5@gmail.com',
      link: 'mailto:johnnyduenas5@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(571) 247-2478',
      link: 'tel:5712472478'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Centreville, Virginia',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/johnny-duenas-884314208',
      color: '#0891b2'
    },
    {
      icon: Github,
      name: 'GitHub',
      link: 'https://github.com/JohnnyD01',
      color: '#1e40af'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Get In Touch
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-cyan-600 to-blue-700 mb-6 mx-auto"></div>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, data projects, or collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me more about your project or inquiry..."
                      rows={6}
                      className="bg-white border-slate-300 text-slate-900 focus:border-cyan-600 transition-colors resize-none"
                    />
                  </div>

                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-6 text-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <CheckCircle2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="md:col-span-2 space-y-6">
            {/* Contact Details */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="p-3 rounded-full bg-cyan-50 group-hover:bg-cyan-100 transition-colors">
                      <info.icon className="h-5 w-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-slate-900 hover:text-cyan-600 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-900 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-white border-slate-200 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Connect Online</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
                    >
                      <div 
                        className="p-2 rounded-full transition-colors"
                        style={{ backgroundColor: `${social.color}20` }}
                      >
                        <social.icon 
                          className="h-5 w-5" 
                          style={{ color: social.color }}
                        />
                      </div>
                      <span className="text-slate-900 font-medium group-hover:text-cyan-600 transition-colors">
                        {social.name}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Card */}
            <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 border border-cyan-300 mb-4">
                  <div className="w-2 h-2 rounded-full bg-cyan-600 animate-pulse"></div>
                  <span className="text-cyan-700 text-sm font-medium">Available for Opportunities</span>
                </div>
                <p className="text-slate-700 text-sm">
                  Open to full-time positions, contract work, and consulting projects in data analysis and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;