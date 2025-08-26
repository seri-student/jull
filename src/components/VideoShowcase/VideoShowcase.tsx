import React, { useState, useContext } from 'react';
import { Play } from 'lucide-react';
import { videos } from '../../data/videos';
import { VideoCard } from './VideoCard';
import { AnimatedSection } from '../ui/animated-section';
import { CookieConsentContext } from '../../App'; // Adjust path as needed
import { setCookie } from '../../utils/cookieUtils';
import './VideoShowcase.css';

export const VideoShowcase: React.FC = () => {
  const hasCookieConsent = useContext(CookieConsentContext);

  const handleAcceptCookies = () => {
    setCookie('cookie_consent', 'accepted', 365);
    window.location.reload(); // Reload to apply changes
  };

  return (
    <section className="video-showcase relative z-10 bg-transparent" id="portfolio" aria-label="Video Portfolio Showcase">
        <div className="video-showcase-container">
          {/* Section Header */}
          <AnimatedSection 
            animationType="fadeUp" 
            delay={0.2} 
            duration={0.8}
            className="video-showcase-header"
          >
            <div className="text-center mb-4">
              <h2 className="video-showcase-title">
                Featured Work
              </h2>
              <p className="text-gray-400 text-lg">
                Showcasing our best video editing projects
              </p>
            </div>
          </AnimatedSection>

          {/* Video Grid */}
          <AnimatedSection 
            animationType="scaleIn" 
            delay={0.4} 
            duration={1.0}
            className="video-grid-container"
          >
            <div className="video-grid-container">
              {hasCookieConsent ? (
                <div className="video-grid">
                  {videos.map((video, index) => (
                    <VideoCard
                      key={video.id}
                      video={video}
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center p-8 bg-gray-700 rounded-lg text-center">
                  <p className="text-white text-lg mb-4">Bitte akzeptieren Sie Cookies, um die Videos anzusehen.</p>
                  <button
                    onClick={handleAcceptCookies}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    Cookies akzeptieren
                  </button>
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
    </section>
  );
};