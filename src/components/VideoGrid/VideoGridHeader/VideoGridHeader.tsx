import React from 'react';
import './VideoGridHeader.scss';

export interface VideoGridHeaderProps {
  title: string;
}

export const VideoGridHeader: React.FC<VideoGridHeaderProps> = (props) => {
  return (
    <div className="video-grid-header">
      <span className="title">{props.title}</span>
    </div>
  )
};
