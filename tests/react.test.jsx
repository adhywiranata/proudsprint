import React from 'react';
import { shallow } from 'enzyme';

// import Header from '../src/components/layouts/Header';
import Topbar from '../src/components/layouts/Topbar';

describe('<Topbar />', () => {
  it('renders Topbar', () => {
    const wrapper = shallow(<Topbar />);
    expect(wrapper).to.have.length(1);
  });
});

// describe('<Header />', () => {
//   it('renders Topbar', () => {
//     const wrapper = shallow(<Header />);
//     expect(wrapper.find(Topbar)).to.have.length(1);
//   });
// });
