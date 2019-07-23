import React from 'react';
import Orders from './Orders';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<Orders />', () => {
    const mockStore = configureStore([thunk]);
    const mockOnFetchOrders = jest.fn();
    const initialState = {
        orders: [],
        loading: false,
        token: null,
        userId: null,
        onFetchOrders: mockOnFetchOrders
    }; 


    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}>
                <Orders 
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

    it('should call onFetchOrders action', () => {
        mockOnFetchOrders.call();
        expect(mockOnFetchOrders.mock.calls.length).toBe(1)
    });

});