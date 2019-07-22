import React from 'react';
import Modal from './Modal';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Modal />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Modal  />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});