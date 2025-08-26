import React from 'react';
import { Testimonial } from '../../data/testimonials';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <div 
      className="testimonial-card"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Phone-style video container */}
      <div className="phone-container">
        <div className="phone-frame">
          <div className="phone-screen">
            <iframe
              src={testimonial.videoUrl}
              width="100%"
              height="100%"
              allow="autoplay"
              className="testimonial-video"
              title={testimonial.title}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      
      {/* Testimonial info */}
      <div className="testimonial-info">
        <h3 className="testimonial-title">{testimonial.title}</h3>
        {testimonial.clientName && (
          <p className="client-name">{testimonial.clientName}</p>
        )}
        {testimonial.company && (
          <p className="company-name">{testimonial.company}</p>
        )}
      </div>
    </div>
  );
};