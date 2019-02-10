import React from 'react';
import HeaderNav from '../../containers/HeaderNav/HeaderNav';
import './AppLayout.scss';

export interface AppLayoutProps {
  children?: any;
}

export function AppLayout(props: AppLayoutProps) {
  return (
    <div className="app-layout">
      <HeaderNav/>
      {props.children}
    </div>
  )
}

export default AppLayout;
