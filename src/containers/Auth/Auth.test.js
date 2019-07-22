import React from 'react';
import Auth from './Auth';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

configure({ adapter: new Adapter() });

describe('<Auth />', () => {
    const initialState = {
        loading: false,
        error: null,
        isAuthenticated: false
    }; 
    const mockStore = configureStore();
    const mockLoadingfn = jest.fn();
    let wrapper;
    let store;
    // const props = {
    //     loading: false
    // };
    beforeEach(() => {
      store = mockStore(initialState);
      wrapper = shallow(<Auth store={store} />);
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

});