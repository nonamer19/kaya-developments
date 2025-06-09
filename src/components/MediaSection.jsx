import React from 'react';

const MediaSection = () => {
  // Media logos data
  const mediaLogos = [
    { name: "Vogue", src: "/assets/images/media/Vogue-2-2048x1365.png" },
    { name: "CNN", src: "/assets/images/media/download-1-2048x945.png" },
    { name: "Condé Nast Traveler", src: "/assets/images/media/download-2-2048x730.png" },
    { name: "The Telegraph", src: "/assets/images/media/download-4.png" },
    { name: "The Times", src: "/assets/images/media/pngwing.com-1.png" },
    { name: "Forbes", src: "/assets/images/media/pngwing.com-2.png" },
    { name: "The Guardian", src: "/assets/images/media/kindpng_3925657-2048x724.png" }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-[#7A6952] font-['Work_Sans'] text-3xl font-semibold mb-10">
          As Featured In
        </h2>
        
        {/* Media logos grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto mb-8">
          {mediaLogos.map((media, index) => (
            <div 
              key={index} 
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            >
              <div className="h-16 md:h-20 flex items-center justify-center px-4 py-2">
                <img 
                  src={media.src} 
                  alt={media.name} 
                  className="max-h-full max-w-[120px] md:max-w-[150px] object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Soft divider */}
        <div className="w-24 h-px bg-[#D8C7B5] mx-auto opacity-60"></div>
      </div>
    </div>
  );
};

export default MediaSection;