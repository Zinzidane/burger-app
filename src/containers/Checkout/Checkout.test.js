import React from 'react';
import Checkout from './Checkout';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<Checkout />', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        ings: [],
        purchased: false
    }; 


    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}>
                <Checkout 
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

});