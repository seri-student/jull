import React from 'react';
import { AnimatedSection } from '../ui/animated-section';
import './AboutMe.css';
import aboutMeImage from './julian.png'; // Updated path

const AboutMe: React.FC = () => {
  return (
    <section className="about-me-section text-white py-16 md:py-24 relative z-10 bg-transparent" id="about">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8">
          {/* Left Section: Image */}
          <AnimatedSection 
            animationType="slideLeft" 
            delay={0.2} 
            duration={1.0}
            className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0"
          >
            <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
              <img 
                src={aboutMeImage} 
                alt="About Me" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] rounded-full object-cover shadow-2xl border-4 border-gray-600 transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </AnimatedSection>

          {/* Right Section: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left px-4 sm:px-0">
            <AnimatedSection 
              animationType="slideRight" 
              delay={0.4} 
              duration={0.8}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-shadow">
                Hi, I'm <span className="text-blue-400">Julin Design</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection 
              animationType="fadeUp" 
              delay={0.6} 
              duration={0.8}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 mb-4 text-shadow">
                I am a passionate video editor based in Germany, dedicated to bringing stories to life through compelling visual narratives. With years of experience in post-production, I specialize in crafting engaging content for various platforms, from dynamic social media clips to cinematic brand films.
              </p>
            </AnimatedSection>
            
            <AnimatedSection 
              animationType="fadeUp" 
              delay={0.8} 
              duration={0.8}
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-200 text-shadow">
                My goal is to transform raw footage into polished masterpieces that captivate audiences and achieve your communication objectives. Let's create something extraordinary together.
              </p>
            </AnimatedSection>
          </div>
        </div>
    </section>
  );
};

export default AboutMe;
