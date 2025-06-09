import React, { useEffect, useState } from 'react';
import { FaInstagram, FaFacebookF } from 'react-icons/fa';

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Handle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById('lead-capture-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Social Media Icons */}
      <div className="absolute top-6 right-6 sm:right-10 flex space-x-4 z-50">
        <a href="https://www.instagram.com/kaya_developments/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kaya-beige transition-colors duration-300">
          <FaInstagram size={24} />
        </a>
        <a href="https://web.facebook.com/profile.php?id=61575634726352" target="_blank" rel="noopener noreferrer" className="text-white hover:text-kaya-beige transition-colors duration-300">
          <FaFacebookF size={22} />
        </a>
      </div>

      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: 'url(/assets/images/properties/clay-house.jpg)',
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.05s ease-out'
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        {/* Hero Content */}
        <div className="max-w-3xl w-full mx-auto text-center text-white">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <img 
              src="/assets/images/KAYA Development Logo Preview.png" 
              alt="KAYA Developments Logo" 
              className="h-36 w-auto" 
            />
          </div>
          
          {/* Headline */}
          <h1 className="font-bondoluo text-3xl sm:text-5xl md:text-6xl font-bold mb-6 text-white mx-auto">
            We're Building the future of Boutique Travel in<br/>
            Bali And You Can Be Part of it Today.
          </h1>
          
          {/* Divider Line */}
          <div className="h-[1px] w-1/2 bg-white/40 mx-auto mb-6"></div>
          
          {/* Subheadline */}
          <h2 className="font-futura text-lg md:text-xl font-normal leading-relaxed mb-6 max-w-2xl mx-auto">
            Own a fully managed apartment in a Luxury Residence in Bali
            <br/> 
            with stunning rice field views and tropical lifestyle access.
          </h2>
          
          {/* Delivery date */}
          <p className="font-futura text-xl font-semibold mb-12 text-white">
            Delivery Q1 2026
          </p>
          
          <div className="flex flex-col items-center">
            {/* CTA button */}
            <a 
              href="#" 
              onClick={scrollToForm}
              className="inline-block bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 text-lg mb-16 border-2 border-kaya-beige hover:border-white transform hover:-translate-y-1"
            >
              Request Project Presentation
            </a>
            
            {/* Scroll Down Animation */}
            <div 
              onClick={scrollToForm}
              className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 animate-float"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-white" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;