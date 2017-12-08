import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  }

  componentDidMount() {
/*     axios.get('https://burger-app-47682.firebaseio.com/ingredients.json')
      .then(response => {
        this.setState({ingredients: response.data});
      })
      .catch(error => {
        this.setState({error: true});
      }); */
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(ingKey => {
        return ingredients[ingKey];
      }).reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchasable: sum > 0
    });
  }

  purchaseHandler = () => {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = () => {
    this.setState({purchasing: false});
  };

  purchaseContinueHandler = () => {
/*     this.setState({loading: true});
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Ivan M',
        address: {
          street: 'Parkovay',
          zipCode: '225401',
          city: 'B-city'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false, purchasing: false});
      })
      .catch(error => {
        this.setState({loading: false, purchasing: false});
      }); */
    const queryParams = [];
    for (let i in this.props.ings) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
    }
    queryParams.push('price=' + this.props.price);
    const queryString = queryParams.join('&');
    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.ings
    };
    for (let key in disabledInfo) {
      disabledInfo[key]= disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

    if (this.props.ings) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            ingredientAdded={this.props.onIngredientAdded}
            ingredientRemoved={this.props.onIngredientRemoved}
            purchasable={this.state.purchasable}
            disabled={disabledInfo}
            ordered={this.purchaseHandler}
            price={this.props.price} />
        </Aux>
      );

      orderSummary = <OrderSummary
        ingredients={this.props.ings}
        purchaseCancelled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.props.price} />;
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.ingredients,
    price: state.totalPrice
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
    onIngredientRemoved: (ingName) => dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));