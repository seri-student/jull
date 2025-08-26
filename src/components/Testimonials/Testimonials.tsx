import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { TestimonialCard } from './TestimonialCard';
import { AnimatedSection } from '../ui/animated-section';
import './Testimonials.css';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonialsCount = testimonials.length;
  const showNavigation = testimonialsCount > 3;
  const maxVisibleDesktop = Math.min(testimonialsCount, 3);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev + 1) % testimonialsCount);
    } else {
      const maxIndex = testimonialsCount - maxVisibleDesktop;
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrentIndex((prev) => (prev - 1 + testimonialsCount) % testimonialsCount);
    } else {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const getVisibleTestimonials = () => {
    if (isMobile) {
      return [testimonials[currentIndex]];
    }
    
    if (testimonialsCount <= 3) {
      return testimonials;
    }
    
    return testimonials.slice(currentIndex, currentIndex + maxVisibleDesktop);
  };

  const getDotCount = () => {
    if (isMobile) {
      return testimonialsCount;
    }
    return testimonialsCount > 3 ? testimonialsCount - 2 : 1;
  };

  if (testimonialsCount === 0) {
    return null;
  }

  return (
    <section className="testimonials-section relative z-10 bg-transparent" id="testimonials">
        <div className="testimonials-container">
          {/* Section Header */}
          <AnimatedSection 
            animationType="fadeUp" 
            delay={0.2} 
            duration={0.8}
            className="testimonials-header"
          >
            <div className="testimonials-header">
              <h2 className="testimonials-title">Client Testimonials</h2>
              <p className="testimonials-subtitle">
                Hear what our clients say about our video editing services
              </p>
            </div>
          </AnimatedSection>

          {/* Testimonials Content */}
          <AnimatedSection 
            animationType="scaleIn" 
            delay={0.4} 
            duration={1.0}
            className="testimonials-content-wrapper"
          >
            <div className="testimonials-content">
              {/* Navigation Arrows - Show only when needed */}
              {showNavigation && (
                <>
                  <button
                    className="nav-arrow nav-arrow-left"
                    onClick={prevSlide}
                    disabled={!isMobile && currentIndex === 0}
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  
                  <button
                    className="nav-arrow nav-arrow-right"
                    onClick={nextSlide}
                    disabled={!isMobile && currentIndex >= testimonialsCount - maxVisibleDesktop}
                    aria-label="Next testimonials"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}

              {/* Testimonials Grid/Carousel */}
              <div className="testimonials-wrapper">
                <div 
                  className={`testimonials-grid ${isMobile ? 'mobile-carousel' : ''}`}
                  style={{
                    gridTemplateColumns: isMobile 
                      ? '1fr' 
                      : `repeat(${Math.min(testimonialsCount, 3)}, 1fr)`
                  }}
                >
                  {getVisibleTestimonials().map((testimonial, index) => (
                    <TestimonialCard
                      key={testimonial.id}
                      testimonial={testimonial}
                      index={index}
                    />
                  ))}
                </div>
              </div>

              {/* Dots Navigation - Show only when needed */}
              {showNavigation && (
                <div className="dots-container">
                  {Array.from({ length: getDotCount() }).map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </AnimatedSection>
        </div>
    </section>
  );
};