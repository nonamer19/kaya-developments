import React from 'react';

const WhatsAppButton = () => {
  // WhatsApp URL with the provided phone number
  const whatsappUrl = 'https://wa.me/6285190079372';
  
  // Handle click event
  const handleClick = (e) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 cursor-pointer" 
      onClick={handleClick}
      style={{
        animation: 'bounce 2s infinite',
      }}
    >
      {/* WhatsApp Button with Pulse Effect */}
      <div className="relative">
        {/* Ripple effect */}
        <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75"></span>
        
        {/* Main button */}
        <button 
          aria-label="Chat on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-all hover:bg-green-600"
        >
          {/* WhatsApp Icon */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 48 48" 
            width="30px" 
            height="30px"
            fill="#FFFFFF"
          >
            <path 
              d="M24,4C12.95,4,4,12.95,4,24c0,3.77,1.04,7.3,2.86,10.3L4.69,44.37c-0.27,1.25,0.89,2.41,2.14,2.14l10.07-2.17 C19.7,45.96,21.8,46.35,24,46.35c11.05,0,20-8.95,20-20S35.05,4,24,4z M35.48,32.2c-0.53,1.49-3.17,2.81-4.36,2.88 c-1.12,0.06-2.16,0.49-7.28-1.52c-6.14-2.42-10.04-8.77-10.35-9.18c-0.31-0.41-2.5-3.32-2.5-6.33c0-3.01,1.58-4.48,2.14-5.09 c0.56-0.61,1.22-0.76,1.63-0.76c0.41,0,0.82,0,1.17,0.02c0.39,0.02,0.9-0.15,1.41,1.07c0.52,1.25,1.77,4.3,1.92,4.61 c0.15,0.31,0.26,0.67,0.05,1.07c-0.2,0.4-0.3,0.65-0.61,1.01c-0.3,0.36-0.64,0.79-0.91,1.07c-0.3,0.31-0.61,0.65-0.26,1.27 c0.35,0.61,1.57,2.63,3.36,4.27c2.31,2.11,4.24,2.77,4.85,3.07c0.61,0.31,0.97,0.26,1.32-0.15c0.36-0.41,1.54-1.79,1.95-2.4 c0.4-0.61,0.81-0.51,1.37-0.31c0.56,0.2,3.55,1.67,4.16,1.98c0.61,0.31,1.01,0.46,1.17,0.71 C36.01,29.59,36.01,30.71,35.48,32.2z"
            />
          </svg>
        </button>
      </div>

      {/* Floating label */}
      <div className="mt-2 rounded-lg bg-white px-3 py-1 text-sm font-semibold text-green-600 shadow-md">
        Chat with us
      </div>

      {/* CSS for bounce animation */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;