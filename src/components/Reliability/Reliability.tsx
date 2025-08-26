import React from 'react';
import { reliabilityFeatures } from '../../data/reliability';
import { ReliabilityCard } from './ReliabilityCard';
import './Reliability.css';

export const Reliability: React.FC = () => {
  return (
    <section className="reliability-section" id="reliability">
      <div className="reliability-container">
        {/* Section Header */}
        <div className="reliability-header">
          <h2 className="reliability-title">
            Why Choose Us
          </h2>
          <p className="reliability-subtitle">
            Trusted by content creators worldwide for professional video editing excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="reliability-grid">
          {reliabilityFeatures.map((feature, index) => (
            <ReliabilityCard
              key={feature.id}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};