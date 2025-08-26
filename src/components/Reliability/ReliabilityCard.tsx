import React from 'react';
import { ReliabilityFeature } from '../../data/reliability';

interface ReliabilityCardProps {
  feature: ReliabilityFeature;
  index: number;
}

export const ReliabilityCard: React.FC<ReliabilityCardProps> = ({ feature, index }) => {
  const IconComponent = feature.icon;

  return (
    <div 
      className="custom-card"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="custom-card-inner">
        <div className="card-content">
          {/* Icon */}
          <div className="icon-container">
            <IconComponent className="card-icon" />
          </div>
          
          {/* Content */}
          <div className="text-content">
            <h3 className="card-title">
              {feature.title}
            </h3>
            <p className="card-description">
              {feature.description}
            </p>
            
            {/* Stats */}
            <div className="card-stats">
              <div className="stats-number">
                {feature.stats}
              </div>
              <div className="stats-subtitle">
                {feature.subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};