import React, {Component} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] will update!');
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingKey => {
        return (
          <li key={ingKey}>
            <span style={{ textTransform: 'capitalize' }}>{ingKey}</span>:
          {this.props.ingredients[ingKey]}
          </li>
        );
      });
    return (
      <div style={{ textAlign: 'center' }}>
        <h3>Your order</h3>
        <p>A delicious burger with following ingredients:</p>
        <ul style={{listStyle: 'none'}}>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </div>
    );
  }
}

export default OrderSummary;