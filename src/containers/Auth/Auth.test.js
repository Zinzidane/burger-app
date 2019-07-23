import React from 'react';
import Auth from './Auth';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<Auth />', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        loading: false,
        error: null,
        isAuthenticated: false,
        buildingBurger: false,
        authRedirectPath: '/'
    }; 
    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}><Auth {...initialState} /></Provider> 
        );
    });

    it('renders correctly', () => {
        // expect(wrapper.props().loading).toBe(initialState.loading);
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should have correct props', () => {
        expect(wrapper.props()).toEqual(initialState);
    });

});