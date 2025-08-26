import React from 'react';
import { galleryImages } from '../../data/gallery';
import { GalleryCard } from './GalleryCard';
import { AnimatedSection } from '../ui/animated-section';
import './GalleryShowcase.css';

export const GalleryShowcase: React.FC = () => {
  const duplicatedImages = [...galleryImages, ...galleryImages]; // Duplicate for infinite scroll

  return (
    <section className="gallery-showcase relative z-10 bg-transparent" aria-label="Our work gallery showcase">
        <div className="gallery-showcase-container">
          <AnimatedSection 
            animationType="fadeUp" 
            delay={0.2} 
            duration={0.8}
          >
            <h2 className="gallery-showcase-title">
              Behind the Scenes
            </h2>
          </AnimatedSection>
          
          <AnimatedSection 
            animationType="slideLeft" 
            delay={0.4} 
            duration={1.0}
          >
            <div className="gallery-showcase-wrapper">
              <div className="gallery-showcase-gradient-left" />
              <div className="gallery-showcase-gradient-right" />
              
              <div className="gallery-track">
                {duplicatedImages.map((image, index) => (
                  <GalleryCard
                    key={`${image.id}-${index}`}
                    image={image}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
    </section>
  );
};