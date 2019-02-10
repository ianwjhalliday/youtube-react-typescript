import React from 'react';
import {Route, Switch} from 'react-router';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Home} from './containers/Home/Home';
import {Watch} from './containers/Watch/Watch';

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/watch" component={Watch}/>
        <Route path="/" component={Home}/>
      </Switch>
    </AppLayout>
  );
};
