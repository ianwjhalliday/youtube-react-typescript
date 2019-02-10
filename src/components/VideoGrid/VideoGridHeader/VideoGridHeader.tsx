import React from 'react';
import './VideoGridHeader.scss';

export interface VideoGridHeaderProps {
  title: string;
}

export function VideoGridHeader(props: VideoGridHeaderProps) {
  return (
    <div className="video-grid-header">
      <span className="title">{props.title}</span>
    </div>
  )
}

export default VideoGridHeader;
