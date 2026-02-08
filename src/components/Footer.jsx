import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900">
              Johnny<span className="text-cyan-600">.</span>
            </h3>
            <p className="text-slate-600 text-sm">
              Data Analyst specializing in SQL, Power BI, and data reporting solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-600 hover:text-cyan-600 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-600">
                <a href="mailto:johnnyduenas5@gmail.com" className="hover:text-cyan-600 transition-colors">
                  johnnyduenas5@gmail.com
                </a>
              </li>
              <li className="text-slate-600">
                <a href="tel:5712472478" className="hover:text-cyan-600 transition-colors">
                  (571) 247-2478
                </a>
              </li>
              <li className="text-slate-600">
                Centreville, Virginia
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/johnny-duenas-884314208" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
              >
                <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </a>
              <a 
                href="https://github.com/JohnnyD01" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
              >
                <Github className="h-5 w-5 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </a>
              <a 
                href="mailto:johnnyduenas5@gmail.com"
                className="p-2 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
              >
                <Mail className="h-5 w-5 text-slate-600 group-hover:text-cyan-600 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-sm">
            © {currentYear} Johnny Duenas. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="p-2 rounded-full border border-slate-300 hover:border-cyan-600 hover:bg-cyan-50 transition-all duration-300 group"
          >
            <ArrowUp className="h-5 w-5 text-slate-600 group-hover:text-cyan-600 transition-colors" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;