import React from 'react';
import { ShootingStars } from './shooting-stars';

export const FixedStarryBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 bg-black">
      {/* Static twinkling stars background */}
      <div className="absolute inset-0">
        <div className="stars absolute inset-0 opacity-80" />
      </div>

      {/* Multiple shooting star layers */}
      <ShootingStars
        starColor="#ffffff"
        trailColor="#ffffff"
        minSpeed={15}
        maxSpeed={35}
        minDelay={2000}
        maxDelay={5000}
        className="opacity-90"
      />
      <ShootingStars
        starColor="#e0e7ff"
        trailColor="#c7d2fe"
        minSpeed={10}
        maxSpeed={25}
        minDelay={3000}
        maxDelay={6000}
        className="opacity-70"
      />
      <ShootingStars
        starColor="#f0f9ff"
        trailColor="#dbeafe"
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={4000}
        className="opacity-50"
      />

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 40px 70px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, rgba(255,255,255,0.6), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 160px 120px, rgba(255,255,255,0.5), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 200px 200px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 250px 100px, rgba(255,255,255,0.6), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 300px 50px, rgba(255,255,255,0.9), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 350px 180px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 80px 200px, rgba(255,255,255,0.8), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 180px 50px, rgba(255,255,255,0.6), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 320px 150px, rgba(255,255,255,0.7), rgba(0,0,0,0)),
            radial-gradient(1px 1px at 120px 300px, rgba(255,255,255,0.5), rgba(0,0,0,0)),
            radial-gradient(2px 2px at 280px 80px, rgba(255,255,255,0.8), rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 400px 400px;
          animation: twinkle 6s ease-in-out infinite;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          25% { opacity: 0.8; }
          50% { opacity: 1; }
          75% { opacity: 0.7; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};