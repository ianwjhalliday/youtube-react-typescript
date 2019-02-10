import React from 'react';
import {shallow} from 'enzyme';
import SideBarItem from '../SideBarItem';

describe('SideBarItem', () => {
  describe('renders SideBarItem with a label and icon', () => {
    test('without highlight prop', () => {
      const wrapper = shallow(
        <SideBarItem label="a label" icon="bell"/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('highlight prop is false', () => {
      const wrapper = shallow(
        <SideBarItem label="a label" icon="bell" highlight={false}/>
      );
      expect(wrapper).toMatchSnapshot();
    });

    test('highlight prop is true', () => {
      const wrapper = shallow(
        <SideBarItem label="a label" icon="bell" highlight/>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
