import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AIEngineering } from './pages/solutions/AIEngineering';
import { Compliance } from './pages/solutions/healthcare/Compliance';
import { VoiceAgent } from './pages/solutions/healthcare/VoiceAgent';
import { Avatars } from './pages/solutions/healthcare/Avatars';
import { Creative } from './pages/solutions/Creative';
import { CapabilityCenter } from './pages/CapabilityCenter';
import { Clientele } from './pages/Clientele';
import { Contact } from './pages/Contact';
import { CaseStudies } from './pages/resources/CaseStudies';

// Simple ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Animation Observer Component
const ScrollObserver = () => {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Small timeout to ensure DOM is ready after route change
    setTimeout(() => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <ScrollObserver />
      <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            
            {/* Solutions Routes */}
            <Route path="/solutions/engineering" element={<AIEngineering />} />
            <Route path="/solutions/healthcare/compliance" element={<Compliance />} />
            <Route path="/solutions/healthcare/voice" element={<VoiceAgent />} />
            <Route path="/solutions/healthcare/avatars" element={<Avatars />} />
            <Route path="/solutions/creative" element={<Creative />} />
            
            {/* Other Top Level Pages */}
            <Route path="/capability-center" element={<CapabilityCenter />} />
            <Route path="/clientele" element={<Clientele />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Resources */}
            <Route path="/resources/case-studies" element={<CaseStudies />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;