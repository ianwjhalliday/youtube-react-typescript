import React from 'react';
import {Menu} from 'semantic-ui-react';
import './SideBarHeader.scss';

export interface SideBarHeaderProps {
  title: string;
}

export const SideBarHeader: React.FC<SideBarHeaderProps> = (props) => {
  const heading = props.title.toUpperCase();
  return (
    <Menu.Item>
      <Menu.Header className="sidebar-header">{heading}</Menu.Header>
    </Menu.Item>
  );
};
