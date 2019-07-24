import React from 'react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<Layout />', () => {
    const mockStore = configureStore([thunk]);

    const initialState = {
        isAuthenticated: false
    }; 

    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}>
                <Layout 
                    {...initialState}
                />
            </Provider> 
        );
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should have correct props', () => {
        expect(wrapper.props()).toEqual(initialState);
    });

    it('should have a header', () => {
        expect(wrapper.find('header')).toHaveLength(1);
    })
});