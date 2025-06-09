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
          backgroundImage: 'url(/assets/images/Birds Eye.jpg)',
          transform: `translateY(${scrollPosition * 0.15}px)`,
          transition: 'transform 0.05s ease-out'
        }}
      >
        {/* Overlay to darken the image for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        {/* Additional vignette effect for improved text readability */}
        <div className="absolute inset-0 shadow-[inset_0_0_120px_60px_rgba(0,0,0,0.5)]"></div>
      </div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 z-10">
        {/* Hero Content with enhanced typography - responsive width */}
        <div className="max-w-3xl w-full mx-auto text-center text-white mt-6 px-4 sm:px-6">
          {/* Logo - Centered above the text */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <img 
              src="/assets/images/KAYA Development Logo Preview.png" 
              alt="KAYA Developments Logo" 
              className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto" 
            />
          </div>
          
          {/* Headline with better font fallback */}
          <h1 className="font-work text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white tracking-wide mx-auto drop-shadow-lg">
            <span className="block mb-2">We're building the future of</span>
            <span className="block mb-2">boutique travel in Bali</span>
            <span className="block">and you can be a part of it today.</span>
          </h1>
          
          {/* Divider Line - responsive width */}
          <div className="h-[1px] w-full max-w-md bg-white/40 mx-auto mb-6"></div>
          
          {/* Subheadline with font fallback */}
          <h2 className="font-open text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-6 mx-auto text-kaya-light tracking-normal drop-shadow-md">
            Own a fully managed apartment in a Luxury Residence in Bali
            <br className="hidden sm:block"/> 
            with stunning rice field views and tropical lifestyle access.
          </h2>
          
          {/* Delivery date */}
          <p className="font-open text-lg md:text-xl font-semibold mb-10 md:mb-14 text-white/90 drop-shadow-md">
            Delivery Q1 2026
          </p>
          
          <div className="flex flex-col items-center">
            {/* Updated CTA button with improved mobile styling */}
            <a 
              href="#" 
              onClick={scrollToForm}
              className="inline-block bg-transparent hover:bg-white/10 text-white font-bold py-4 sm:py-5 px-8 sm:px-16 rounded-full transition-all duration-300 text-base sm:text-lg mb-12 sm:mb-16 border-2 border-white hover:border-kaya-beige transform hover:-translate-y-1 tracking-wide shadow-lg"
            >
              Request Project Presentation
            </a>
            
            {/* Scroll Down Animation - using Tailwind animation */}
            <div 
              onClick={scrollToForm}
              className="cursor-pointer opacity-80 hover:opacity-100 transition-all duration-300 animate-float"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8 sm:h-10 sm:w-10 text-white drop-shadow-lg" 
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