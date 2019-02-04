import React from 'react';
import {Icon, Menu, SemanticICONS} from 'semantic-ui-react';
import './SideBarItem.scss';

export interface SideBarItemProps {
  highlight?: boolean;
  icon: SemanticICONS;
  label: string;
}

export function SideBarItem(props: SideBarItemProps) {
  // React will ignore custom boolean attributes, therefore we pass a string
  // we use this attribute in our SCSS for styling
  const highlight = props.highlight ? 'highlight-item' : null;
  return (
    <Menu.Item className={['sidebar-item', highlight].join(' ')}>
      <div className="sidebar-item-alignment-container">
        <span><Icon size="large" name={props.icon} /></span>
        <span>{props.label}</span>
      </div>
    </Menu.Item>
  )
}

export default SideBarItem;
