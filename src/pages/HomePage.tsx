import React from 'react';
import { Header } from '../components/Header/Header';
import { Hero } from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe'; // Import the new component
import { VideoShowcase } from '../components/VideoShowcase/VideoShowcase';
// import { Reliability } from '../components/Reliability/Reliability';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { GalleryShowcase } from '../components/GalleryShowcase/GalleryShowcase';
import { WhyChooseMe } from '../components/WhyChooseMe/WhyChooseMe';
import { BookingSection } from '../components/BookingSection/BookingSection';

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <Hero />
      <VideoShowcase />
      <AboutMe /> {/* Add the AboutMe component here */}
      {/* <Reliability /> */}
      <Testimonials />
      <GalleryShowcase />
      <WhyChooseMe />
      <BookingSection />
    </div>
  );
};