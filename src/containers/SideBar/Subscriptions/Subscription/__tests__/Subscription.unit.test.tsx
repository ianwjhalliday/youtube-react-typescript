import React from 'react';
import {shallow} from 'enzyme';
import Subscription from '../Subscription';

describe('renders Subscription', () => {
  test('with label', () => {
    const wrapper = shallow(
      <Subscription label="Productioncoder" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('with label and broadcastingNow', () => {
    const wrapper = shallow(
      <Subscription broadcastingNow label="Productioncoder" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('with label and newVideosCount', () => {
    const wrapper = shallow(
      <Subscription label="Productioncoder" newVideosCount={20} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('with label and broadcastingNow takes priority over newVideosCount', () => {
    const wrapper = shallow(
      <Subscription broadcastingNow label="Productioncoder" newVideosCount={20} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
