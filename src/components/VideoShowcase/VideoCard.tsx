import React from 'react';
import { Video } from '../../data/videos';

interface VideoCardProps {
  video: Video;
  index: number;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video, index }) => {
  return (
    <div 
      className="video-player-container"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="video-frame">
        <iframe
          src={video.embedUrl}
          width="100%"
          height="100%"
          allow="autoplay"
          className="video-iframe"
          title={`Video ${video.id}`}
        />
      </div>
    </div>
  );
};