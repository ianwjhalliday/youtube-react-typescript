import React from 'react';
import {Home} from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';
import {Route, Switch} from 'react-router';

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </AppLayout>
  );
};
