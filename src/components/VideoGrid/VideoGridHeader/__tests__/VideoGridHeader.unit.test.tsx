import React from 'react';
import {shallow} from 'enzyme';
import VideoGridHeader from '../VideoGridHeader';

test('renders VideoGridHeader', () => {
  const wrapper = shallow(
    <VideoGridHeader title="title" />
  );
  expect(wrapper).toMatchSnapshot();
});
