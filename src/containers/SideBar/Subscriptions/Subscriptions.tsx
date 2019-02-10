import React from 'react';
import {Subscription} from "./Subscription/Subscription";
import {Divider} from "semantic-ui-react";
import {SideBarHeader} from "../SideBarHeader/SideBarHeader";

export class Subscriptions extends React.Component {
  render() {
    return (
      <>
        <SideBarHeader title="Subscriptions"/>
        <Subscription label="MusicChannel" broadcastingNow/>
        <Subscription label="Coursera" newVideosCount={10}/>
        <Subscription label="TEDx Talks" newVideosCount={23}/>
        <Subscription label="Stanford iOS" newVideosCount={4}/>
        <Subscription label="Udacity" newVideosCount={114}/>
        <Divider/>
      </>
    )
  }
}
