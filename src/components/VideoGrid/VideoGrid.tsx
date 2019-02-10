import React from 'react';
import {Divider} from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';
import VideoGridHeader from './VideoGridHeader/VideoGridHeader';
import './VideoGrid.scss';

export interface VideoGridProps {
  hideDivider?: boolean;
  title: string;
}

export function VideoGrid(props: VideoGridProps) {
  const divider = props.hideDivider ? null : <Divider/>;
  return (
    <>
      <VideoGridHeader title={props.title}/>
      <div className="video-grid">
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
        <VideoPreview/>
      </div>
      {divider}
    </>
  );
}

export default VideoGrid;
