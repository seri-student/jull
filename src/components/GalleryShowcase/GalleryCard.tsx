import React from 'react';
import { GalleryImage } from '../../data/gallery';

interface GalleryCardProps {
  image: GalleryImage;
  index: number;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({ image, index }) => {
  return (
    <div 
      className="gallery-card group"
      style={{ animationDelay: `${index * 200}ms` }}
      role="article"
      aria-label={`Gallery image: ${image.title}`}
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={image.src}
          alt={image.alt}
          className="gallery-image group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {image.title}
          </h3>
        </div>
        <div className="absolute inset-0 rounded-xl ring-2 ring-[#3B82F6]/30 group-hover:ring-[#3B82F6] transition-all duration-300" />
      </div>
    </div>
  );
};