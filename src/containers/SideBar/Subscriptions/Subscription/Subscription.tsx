import React from 'react';
import {Icon, Image, Menu} from 'semantic-ui-react';
import './Subscription.scss';

export interface SubscriptionProps {
  broadcastingNow?: boolean;
  label: string;
  newVideosCount?: number;
}

export function Subscription(props: SubscriptionProps) {
  const {broadcastingNow, label, newVideosCount} = props;
  const rightElement = broadcastingNow
    ? <Icon name="signal" />
    : newVideosCount
      ? <span className="new-videos-count">{newVideosCount}</span>
      : null;

  return (
    <Menu.Item className="sidebar-item">
      <div className="subscription">
        <div>
          <Image src="http://via.placeholder.com/28x28" avatar />
          <span>{label}</span>
        </div>
        {rightElement}
      </div>
    </Menu.Item>
  );
}

export default Subscription;
