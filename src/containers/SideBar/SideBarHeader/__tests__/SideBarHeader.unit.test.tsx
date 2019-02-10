import React from 'react';
import {shallow} from 'enzyme';
import SideBarHeader from '../SideBarHeader';

test('renders SideBarHeader with uppercase title', () => {
  const wrapper = shallow(
    <SideBarHeader title="Header" />
  );
  expect(wrapper).toMatchSnapshot();
});
