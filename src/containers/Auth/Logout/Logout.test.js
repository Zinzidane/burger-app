import React from 'react';
import Logout from './Logout';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<Logout />', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {}; 
    const mockLogoutfn = jest.fn();
    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}><Logout onLogout={mockLogoutfn} /></Provider> 
        );
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should have correct props', () => {
        mockLogoutfn.call();
        expect(mockLogoutfn.mock.calls.length).toBe(1)
    });

});