import React from 'react';
import { shallow } from 'enzyme';

import Header from '../src/components/layouts/Header';
import Topbar from '../src/components/layouts/Topbar';
import Navbar from '../src/components/layouts/Navbar';

describe('<Header />', () => {
  let header;
  let toggleNewStoryModal;
  beforeEach(() => {
    toggleNewStoryModal = jest.fn();
    header = shallow(<Header toggleNewStoryModal={toggleNewStoryModal} />);
  });
  it('renders Topbar as child', () => {
    expect(header.find(Topbar)).toHaveLength(1);
  });
  it('renders Navbar as child', () => {
    expect(header.find(Navbar)).toHaveLength(1);
  });
  it('have toggleNewStoryModal function as props', () => {
    expect(header.props('toggleNewStoryModal')).toBeDefined();
  });
});

describe('<Topbar />', () => {
  it('renders itself', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper).toHaveLength(1);
  });
});

describe('<Navbar />', () => {
  let navbar;
  let toggleNewStoryModal;
  beforeEach(() => {
    toggleNewStoryModal = jest.fn();
    navbar = shallow(<Navbar toggleNewStoryModal={toggleNewStoryModal} />);
  });
  it('renders itself', () => {
    expect(navbar).toHaveLength(1);
  });
  it('have toggleNewStoryModal function as props', () => {
    expect(navbar.props('toggleNewStoryModal')).toBeDefined();
  });
});
