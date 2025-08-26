import React, { useEffect, useContext } from 'react';
import { CookieConsentContext } from '../../App';
import { setCookie } from '../../utils/cookieUtils';
import { AnimatedSection } from '../ui/animated-section';

export const BookingSection: React.FC = () => {
  const hasCookieConsent = useContext(CookieConsentContext);

  useEffect(() => {
    if (hasCookieConsent) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
      };
    }
  }, [hasCookieConsent]);

  const handleAcceptCookies = () => {
    setCookie('cookie_consent', 'accepted', 365);
    window.location.reload(); // Reload to apply change
  };

  return (
    <section className="w-full py-20 relative z-10 bg-transparent" id="booking">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <AnimatedSection 
            animationType="fadeUp" 
            delay={0.2} 
            duration={0.8}
            className="text-center mb-8 md:mb-16"
          >
            <div className="text-center mb-8 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Book a Call
              </h2>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                Ready to take your content to the next level? Schedule a free consultation to discuss your project
              </p>
            </div>
          </AnimatedSection>

          {/* Calendly Widget Container */}
          <AnimatedSection 
            animationType="scaleIn" 
            delay={0.4} 
            duration={1.0}
            className="max-w-4xl mx-auto calendly-container"
          >
            <div className="max-w-4xl mx-auto calendly-container">
              {hasCookieConsent ? (
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-2 sm:p-4 lg:p-6 border border-white/10 calendly-wrapper">
                  {/* Desktop Calendly Widget */}
                  <div 
                    className="calendly-inline-widget" 
                    data-url="https://calendly.com/editingjulian-studio?hide_landing_page_details=1&hide_gdpr_banner=1" 
                    style={{ 
                      minWidth: '100%', 
                      width: '100%',
                      height: '700px',
                      borderRadius: '12px',
                      overflow: 'hidden'
                    }}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-gray-700 rounded-lg text-center min-h-[400px] sm:min-h-[500px] lg:h-[700px]">
                  <p className="text-white text-base sm:text-lg mb-4 px-4">Please accept cookies to view the booking calendar.</p>
                  <button
                    onClick={handleAcceptCookies}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 ease-in-out min-h-[48px]"
                  >
                    Accept Cookies
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
        
        {/* Responsive Calendly styles */}
        <style jsx>{`
          /* Desktop styles (default) */
          .calendly-container {
            width: 100%;
            max-width: 1024px;
          }
          
          .calendly-wrapper {
            position: relative;
            overflow: hidden;
          }
          
          .calendly-inline-widget {
            border-radius: 12px !important;
            overflow: hidden !important;
          }
          
          /* Tablet styles */
          @media (max-width: 1024px) {
            .calendly-inline-widget {
              height: 650px !important;
              min-height: 650px !important;
            }
          }
          
          /* Mobile landscape and small tablets */
          @media (max-width: 768px) {
            .calendly-container {
              padding: 0 8px;
            }
            
            .calendly-wrapper {
              padding: 8px !important;
              border-radius: 16px;
            }
            
            .calendly-inline-widget {
              height: 600px !important;
              min-height: 600px !important;
              border-radius: 8px !important;
            }
          }
          
          /* Mobile portrait */
          @media (max-width: 480px) {
            .calendly-container {
              padding: 0 4px;
            }
            
            .calendly-wrapper {
              padding: 4px !important;
              border-radius: 12px;
            }
            
            .calendly-inline-widget {
              height: 550px !important;
              min-height: 550px !important;
              border-radius: 6px !important;
            }
          }
          
          /* Extra small mobile devices */
          @media (max-width: 320px) {
            .calendly-container {
              padding: 0 2px;
            }
            
            .calendly-wrapper {
              padding: 2px !important;
              border-radius: 8px;
            }
            
            .calendly-inline-widget {
              height: 500px !important;
              min-height: 500px !important;
              border-radius: 4px !important;
            }
          }
          
          /* Ensure Calendly content is responsive */
          @media (max-width: 768px) {
            .calendly-inline-widget iframe {
              width: 100% !important;
              height: 100% !important;
            }
          }
          
          /* Fix for touch devices */
          @media (hover: none) and (pointer: coarse) {
            .calendly-inline-widget {
              -webkit-overflow-scrolling: touch;
              overflow-y: auto;
            }
          }
        `}</style>
    </section>
  );
};