import React from 'react';
import Spinner from './Spinner';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Spinner />);
      
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});