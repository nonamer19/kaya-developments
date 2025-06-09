import React, { useState, useEffect, useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const UnitSlideshow = () => {
  const slides = [
    {
      image: '/assets/images/Birds Eye.jpg',
      label: "Bird's Eye View"
    },
    {
      image: '/assets/images/Rooftop B.jpg',
      label: "Rooftop Living Space"
    },
    {
      image: '/assets/images/Pool View.png',
      label: "Relax by the Pool"
    },
    {
      image: '/assets/images/Pathway 2.jpg',
      label: "Lush Garden Pathways"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // If swiped significantly (more than 50px)
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide(); // Swiped left, show next slide
      } else {
        prevSlide(); // Swiped right, show previous slide
      }
    }
    
    touchStartX.current = null;
  };

  // Auto-rotate every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Pause auto-rotation when user interacts with slider
  const pauseAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resumeAutoRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(nextSlide, 5000);
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 mb-12 text-center">
        <h2 className="font-work text-3xl md:text-4xl text-kaya-primary font-semibold mb-4">Inside The Clay House</h2>
        <p className="text-kaya-dark text-lg md:text-xl max-w-3xl mx-auto">
          A glimpse into the architectural elegance and tropical lifestyle of The Clay House Apartments.
        </p>
      </div>
      
      <div 
        className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full overflow-hidden"
        onMouseEnter={pauseAutoRotation}
        onMouseLeave={resumeAutoRotation}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Label overlay */}
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 bg-kaya-primary/80 px-4 py-2 md:px-6 md:py-3 rounded-md">
                <p className="text-kaya-light font-work text-lg md:text-xl">{slide.label}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation buttons */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-kaya-primary/60 hover:bg-kaya-primary/80 text-white rounded-full p-2 md:p-3 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-lg md:text-xl" />
        </button>
        
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-kaya-primary/60 hover:bg-kaya-primary/80 text-white rounded-full p-2 md:p-3 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <FaChevronRight className="text-lg md:text-xl" />
        </button>
        
        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setCurrentSlide(index);
                setTimeout(() => setIsTransitioning(false), 500);
              }}
              className={`h-2.5 w-2.5 md:h-3 md:w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-kaya-accent scale-125' : 'bg-kaya-primary/50 hover:bg-kaya-primary/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UnitSlideshow;