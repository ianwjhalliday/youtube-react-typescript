import React from 'react';
import cx from 'classnames';
import {Icon, Menu, SemanticICONS} from 'semantic-ui-react';
import './SideBarItem.scss';

export interface SideBarItemProps {
  highlight?: boolean;
  icon: SemanticICONS;
  label: string;
}

export const SideBarItem: React.FC<SideBarItemProps> = (props) => {
  const {highlight, icon, label} = props;
  const classNames = cx({
    'sidebar-item': true,
    'highlight-item': highlight,
  });
  return (
    <Menu.Item className={classNames}>
      <div className="sidebar-item-alignment-container">
        <span><Icon size="large" name={icon}/></span>
        <span>{label}</span>
      </div>
    </Menu.Item>
  )
};
