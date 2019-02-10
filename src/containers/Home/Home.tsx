import React from 'react';
import {VideoGrid} from '../../components/VideoGrid/VideoGrid';
import {SideBar} from '../SideBar/SideBar';
import './Home.scss';

export const Home: React.FC = () => {
  return (
    <>
      <SideBar/>
      <div className="home">
        <div className="responsive-video-grid-container">
          <VideoGrid title="Trending"/>
          <VideoGrid title="Autos & Vehicles" hideDivider/>
        </div>
      </div>
    </>
  );
};
