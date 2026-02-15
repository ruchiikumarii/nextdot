import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center mb-4">
               <img src="/assets/images/logo.png" alt="Nextdot" className="h-8 w-auto" />
            </div>
            <p className="text-gray-500 text-sm mb-6 max-w-xs">
              We design and deploy production grade AI systems for regulated enterprises, healthcare operators and creative industries.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Github size={20} /></a>
            </div>
          </div>
          
          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Solutions</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/solutions/engineering" className="hover:text-gray-900">AI Engineering</Link></li>
              <li><Link to="/solutions/healthcare/compliance" className="hover:text-gray-900">AI for Healthcare</Link></li>
              <li><Link to="/solutions/healthcare/compliance" className="hover:text-gray-900 ml-2">- Compliance</Link></li>
              <li><Link to="/solutions/healthcare/voice" className="hover:text-gray-900 ml-2">- Voice Agents</Link></li>
              <li><Link to="/solutions/creative" className="hover:text-gray-900">Creative & Media</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/resources/case-studies" className="hover:text-gray-900">Case Studies</Link></li>
              <li><Link to="/capability-center" className="hover:text-gray-900">Capability Center</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><Link to="/about" className="hover:text-gray-900">About Us</Link></li>
              <li><Link to="/clientele" className="hover:text-gray-900">Clientele</Link></li>
              <li><Link to="/contact" className="hover:text-gray-900">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-gray-900">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">© 2024 Nextdot AI Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-500 font-medium">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};