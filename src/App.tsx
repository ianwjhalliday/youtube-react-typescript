import React from 'react';
import {Home} from './containers/Home/Home';
import {AppLayout} from './components/AppLayout/AppLayout';

export const App: React.FC = () => {
  return (
    <AppLayout>
      <Home/>
    </AppLayout>
  );
};
