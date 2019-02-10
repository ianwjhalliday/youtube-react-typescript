import React from 'react';
import {Icon, Menu, SemanticICONS} from 'semantic-ui-react';
import './SideBarItem.scss';

export interface SideBarItemProps {
  highlight?: boolean;
  icon: SemanticICONS;
  label: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = (props) => {
  const {highlight, icon, label} = props;
  // React will ignore custom boolean attributes, therefore we pass a string
  // we use this attribute in our SCSS for styling
  const highlightClass = highlight ? 'highlight-item' : null;
  return (
    <Menu.Item className={['sidebar-item', highlightClass].join(' ')}>
      <div className="sidebar-item-alignment-container">
        <span><Icon size="large" name={icon}/></span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  )
};
