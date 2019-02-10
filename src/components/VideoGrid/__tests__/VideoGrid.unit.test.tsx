import React from 'react';
import {shallow} from 'enzyme';
import {VideoGrid} from '../VideoGrid';

describe('VideoGrid', () => {
  test('renders VideoGrid with title and divider', () => {
    const wrapper = shallow(
      <VideoGrid title="title"/>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders VideoGrid with title and no divider', () => {
    const wrapper = shallow(
      <VideoGrid title="title" hideDivider/>
    );
    expect(wrapper).toMatchSnapshot();
  });
})
