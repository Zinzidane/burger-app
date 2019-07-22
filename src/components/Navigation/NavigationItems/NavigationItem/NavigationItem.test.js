import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItem />', () => {
  let wrapper;
  const props = {
      link: "/",
      exact: true
  };
  beforeEach(() => {
    wrapper = shallow(<NavigationItem {...props} />);
  })

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

});