import React from 'react';
import BurgerBuilder from './BurgerBuilder';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('<BurgerBuilder />', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        ings: [],
        price: 0,
        error: null,
        isAuthenticated: false
    }; 
    const mockOnIngredientAdded = jest.fn();
    const mockOnIngredientRemoved = jest.fn();
    const mockOnInitIngredients = jest.fn();
    const mockOnInitPurchase = jest.fn();
    const mockOnSetAuthRedirectPath = jest.fn();

    let wrapper;
    let store;

    beforeEach(() => {

        store = mockStore(initialState);

        wrapper = shallow(
            <Provider store={store}>
                <BurgerBuilder 
                    onIngredientAdded={mockOnIngredientAdded}
                    onIngredientRemoved={mockOnIngredientRemoved}
                    onInitIngredients={mockOnInitIngredients}
                    onInitPurchase={mockOnInitPurchase}
                    onSetAuthRedirectPath={mockOnSetAuthRedirectPath}
                />
            </Provider> 
        );
    });

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('should call onIgredientAdded action', () => {
        mockOnIngredientAdded.call();
        expect(mockOnIngredientAdded.mock.calls.length).toBe(1)
    });

    it('should call onIgredientRemoved action', () => {
        mockOnIngredientRemoved.call();
        expect(mockOnIngredientRemoved.mock.calls.length).toBe(1)
    });

    it('should call onInitIgredients action', () => {
        mockOnInitIngredients.call();
        expect(mockOnInitIngredients.mock.calls.length).toBe(1)
    });

    it('should call onInitPurchase action', () => {
        mockOnInitPurchase.call();
        expect(mockOnInitPurchase.mock.calls.length).toBe(1)
    });

    it('should call onSetAuthRedirectPath action', () => {
        mockOnSetAuthRedirectPath.call();
        expect(mockOnSetAuthRedirectPath.mock.calls.length).toBe(1)
    });
});