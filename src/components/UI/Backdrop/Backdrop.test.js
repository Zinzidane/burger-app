import React from 'react';
import Backdrop from './Backdrop';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<Backdrop />', () => {
    let wrapper;
    const props = {
        show: true
    };
    beforeEach(() => {
      wrapper = shallow(<Backdrop  {...props} />);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});