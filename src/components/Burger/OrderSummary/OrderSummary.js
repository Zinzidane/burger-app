import React from 'react';
import Aux from '../../../hoc/Auxilary';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: 
          {props.ingredients[ingKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3></h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
    </Aux>
  );
};

export default orderSummary;