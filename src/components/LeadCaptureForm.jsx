import React, { useEffect, useState } from 'react';

const LeadCaptureForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    setTimeout(() => {
      setFadeIn(true);
    }, 300);
    
    // Add custom CSS for the iframe content with more aggressive shadow removal
    const style = document.createElement('style');
    style.textContent = `
      /* Target form iframe and all its potential containers - with more aggressive targeting */
      .form-iframe,
      #lead-capture-form,
      #lead-capture-form *,
      #lead-capture-form > *,
      #lead-capture-form iframe,
      #inline-dcS8rkTcrkW0BVYZiMg8,
      #lead-capture-form .container,
      #lead-capture-form .container *,
      #lead-capture-form div,
      #lead-capture-form section,
      iframe[data-form-id="dcS8rkTcrkW0BVYZiMg8"],
      #lead-capture-form [class*="shadow"],
      #lead-capture-form [style*="shadow"],
      body [style*="shadow"],
      body [class*="shadow"],
      body [id*="shadow"] {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        filter: none !important;
        -webkit-filter: none !important;
        text-shadow: none !important;
        border-shadow: none !important;
        outline: none !important;
        transform: none !important;
        transition: all 0.3s ease;
        font-family: 'TT Hoves', 'Open Sans', sans-serif;
      }
      
      /* Target any element that might have shadow - with more aggressive targeting */
      [style*="shadow"], 
      [class*="shadow"],
      [id*="shadow"],
      [style*="drop-shadow"],
      [style*="box-shadow"],
      [style*="filter"],
      [style*="-webkit-box-shadow"],
      [style*="-moz-box-shadow"],
      [class*="drop-shadow"],
      [class*="shadow"],
      [class*="box-shadow"],
      iframe,
      form,
      input,
      select,
      textarea,
      button {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        filter: none !important;
        -webkit-filter: none !important;
        text-shadow: none !important;
        border-shadow: none !important;
      }
      
      /* Remove drop shadow effect entirely from the document */
      body,
      body *,
      body *::before,
      body *::after,
      #root *,
      section,
      div,
      html * {
        filter: none !important;
        -webkit-filter: none !important;
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        -moz-box-shadow: none !important;
        text-shadow: none !important;
      }
      
      /* Specifically target the form background */
      body #lead-capture-form,
      #lead-capture-form .bg-cover,
      #lead-capture-form .bg-center {
        box-shadow: none !important;
        filter: none !important;
        -webkit-filter: none !important;
      }

      /* Animation for form entrance */
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      /* Animation for thank you message */
      @keyframes thankYouPulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.05);
        }
        100% {
          transform: scale(1);
        }
      }

      .thank-you-message {
        animation: thankYouPulse 1s infinite;
        transition: all 0.5s ease;
      }

      /* Add listener for button clicks inside the iframe */
      window.addEventListener('message', function(event) {
        if (event.data && event.data.type === 'formSubmit') {
          document.getElementById('thank-you-container').style.display = 'flex';
          setTimeout(() => {
            window.location.href = 'https://www.instagram.com/kaya_developments/';
          }, 3000);
        }
      });
    `;
    document.head.appendChild(style);

    // Listen for messages from iframe to detect form submission
    const handleMessage = (event) => {
      // Check if the message is from our form and indicates submission
      if (
        event.data && 
        (event.data.type === 'formSubmit' || 
         event.data.event === 'form:submit' || 
         event.data.status === 'success')
      ) {
        setFormSubmitted(true);
        
        // Redirect to Instagram after 3 seconds
        setTimeout(() => {
          window.location.href = 'https://www.instagram.com/kaya_developments/';
        }, 3000);
      }
    };

    window.addEventListener('message', handleMessage);

    // Also add a listener for clicks on form buttons (as a fallback)
    const handleIframeLoad = () => {
      const iframe = document.getElementById('inline-dcS8rkTcrkW0BVYZiMg8');
      if (iframe && iframe.contentWindow) {
        try {
          const iframeDoc = iframe.contentWindow.document;
          const buttons = iframeDoc.querySelectorAll('button[type="submit"]');
          
          buttons.forEach(button => {
            button.addEventListener('click', () => {
              // Set a timeout to check if form was actually submitted
              setTimeout(() => {
                setFormSubmitted(true);
                
                // Redirect to Instagram after 3 seconds
                setTimeout(() => {
                  window.location.href = 'https://www.instagram.com/kaya_developments/';
                }, 3000);
              }, 1000);
            });
          });
        } catch (e) {
          // Cross-origin restrictions may prevent accessing iframe content
          console.log('Could not access iframe content due to security restrictions');
        }
      }
    };

    // Try to attach event listeners once iframe loads
    const iframe = document.getElementById('inline-dcS8rkTcrkW0BVYZiMg8');
    if (iframe) {
      iframe.addEventListener('load', handleIframeLoad);
    }

    // Cleanup
    return () => {
      document.head.removeChild(style);
      window.removeEventListener('message', handleMessage);
      if (iframe) {
        iframe.removeEventListener('load', handleIframeLoad);
      }
    };
  }, []);

  return (
    <section id="lead-capture-form" className="relative py-16 md:py-24 px-4 text-center overflow-hidden" style={{ boxShadow: 'none !important', filter: 'none !important', WebkitBoxShadow: 'none !important', MozBoxShadow: 'none !important' }}>
      {/* Background image with opacity */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/assets/images/backgrounds/pexels-valeriiamiller-2587004.jpg" 
          alt="Background" 
          className="w-full h-full object-cover" 
          style={{ opacity: '0.5' }} 
        />
        {/* Overlay to enhance form readability */}
        <div className="absolute inset-0 bg-[#F9F6F1] opacity-70"></div>
      </div>
      <div 
        className="container mx-auto max-w-5xl relative z-10" 
        style={{ 
          boxShadow: 'none !important',
          WebkitBoxShadow: 'none !important',
          MozBoxShadow: 'none !important',
          filter: 'none !important',
          backdropFilter: 'none !important',
          opacity: fadeIn ? 1 : 0,
          transform: fadeIn ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease'
        }}
      >
        <h2 className="font-['TT_Hoves', 'Work_Sans'] text-[#7A6952] text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
          Get The Full Investment Deck
        </h2>
        <p className="font-['TT_Hoves', 'Open_Sans'] text-[#7A6952] text-lg mb-8 max-w-2xl mx-auto">
          Fill out the form to access pricing, apartment options, and the full investor presentation.
        </p>
        
        {/* Thank You Message (conditionally rendered) */}
        {formSubmitted && (
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#F9F6F1] bg-opacity-95 z-20 rounded-lg"
            style={{ 
              animation: 'fadeInUp 0.5s ease forwards',
            }}
          >
            <div className="thank-you-message p-8 rounded-lg text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl md:text-3xl font-bold text-[#7A6952] mb-2">Thank You!</h3>
              <p className="text-lg text-[#7A6952] mb-4">Your investment deck is on its way to your email.</p>
              <p className="text-md text-[#7A6952]">Redirecting you to our Instagram page...</p>
            </div>
          </div>
        )}
        
        {/* Lead capture form iframe - directly placed without container */}
        <iframe
          src="https://api.leadconnectorhq.com/widget/form/dcS8rkTcrkW0BVYZiMg8"
          style={{
            width: '100%',
            maxWidth: '520px', // Limit max width for better appearance
            height: '536px',
            border: 'none',
            borderRadius: '8px',
            backgroundColor: '#F9F6F1',
            boxShadow: 'none !important', // Removed shadow with !important
            WebkitBoxShadow: 'none !important',
            MozBoxShadow: 'none !important',
            filter: 'none !important',
            backdropFilter: 'none !important',
            display: 'block',
            margin: '0 auto',
            animation: fadeIn ? 'fadeInUp 0.8s ease forwards' : 'none',
          }}
          id="inline-dcS8rkTcrkW0BVYZiMg8"
          data-form-id="dcS8rkTcrkW0BVYZiMg8"
          title="Sales Form"
          className="form-iframe"
        ></iframe>
        {/* Script for form functionality */}
        <script src="https://link.msgsndr.com/js/form_embed.js" async></script>
      </div>
    </section>
  );
};

export default LeadCaptureForm;