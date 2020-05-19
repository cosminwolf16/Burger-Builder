import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Toolbar from './Toolbar';
import NavigationItems from '../NavigationItems/NavigationItems';

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });

  it('should render navigation items if authenticated', () => {
    wrapper.setProps({ isAuthenticated: false });
    expect(
      wrapper.contains(<NavigationItems isAuthenticated></NavigationItems>)
    ).toEqual(false);
  });
});
