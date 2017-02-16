import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/components/layouts/Header';
import Topbar from '../src/components/layouts/Topbar';
import Navbar from '../src/components/layouts/Navbar';

describe('<Topbar />', () => {
  it('renders itself', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('<Header />', () => {
  it('renders Topbar as child', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Topbar)).toHaveLength(1);
  });
  it('renders Navbar as child', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(Navbar)).toHaveLength(1);
  });
  // TODO test Header passed props
});
