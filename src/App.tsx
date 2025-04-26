import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Vision from './components/Vision';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "Keymaster - Rebuilding the Internet as a Value Network";
    
    // Animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.feature-card').forEach((el) => {
      observer.observe(el);
      // Add staggered delay based on index
      const index = el.getAttribute('data-index');
      if (index) {
        el.style.animationDelay = `${parseInt(index) * 0.2}s`;
      }
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero />
        <Vision />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;