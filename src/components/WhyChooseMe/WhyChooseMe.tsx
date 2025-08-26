import React from 'react';
import { GlowCard } from '../ui/spotlight-card';
import { whyChooseMeFeatures } from '../../data/whyChooseMe';
import { AnimatedSection } from '../ui/animated-section';

export const WhyChooseMe: React.FC = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden z-10 bg-transparent" id="why-choose-me">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header */}
          <AnimatedSection 
            animationType="fadeUp" 
            delay={0.2} 
            duration={0.8}
            className="text-center mb-12 md:mb-16"
          >
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.9)' }}>
                Why Creators Choose Me
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                Delivering exceptional video editing services that help content creators grow and succeed
              </p>
            </div>
          </AnimatedSection>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center px-4 sm:px-0">
            {whyChooseMeFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              
              return (
                <AnimatedSection
                  key={feature.id}
                  animationType="scaleIn"
                  delay={0.4 + (index * 0.2)}
                  duration={0.8}
                  className="w-full max-w-sm"
                >
                  <GlowCard
                    glowColor={feature.glowColor}
                    customSize={true}
                    className="w-full max-w-sm h-auto min-h-[320px] sm:min-h-[360px] md:min-h-[400px]"
                  >
                    {/* Card Content */}
                    <div className="flex flex-col h-full justify-between">
                      {/* Icon and Title */}
                      <div className="space-y-3 md:space-y-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                        </div>
                        
                        <div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 md:mb-3" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                            {feature.title}
                          </h3>
                          <p className="text-gray-200 leading-relaxed text-xs sm:text-sm md:text-sm" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                            {feature.description}
                          </p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-white/10">
                        <div className="text-center">
                          <div className="text-2xl sm:text-2xl md:text-3xl font-bold text-white mb-1" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}>
                            {feature.stats}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-300 uppercase tracking-wider" style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.7)' }}>
                            {feature.subtitle}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>
        </div>
    </section>
  );
};