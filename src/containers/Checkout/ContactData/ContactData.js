import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'ivan',
        email: 'test@test.com',
        address: {
          street: 'parkovaya',
          postalCode: '225401'
        }
      },
      deliveryMethod: 'fastest'
    };
    axios.post('/orders.json', order)
      .then(response => {
        this.setState({loading: false});
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({loading: false});
      })
  }

  render() {
    let form = (
      <form>
        <h4>Enter your Contact Data</h4>
        <input type='text' name='name' placeholder='Your Name' />
        <input type='email' name='email' placeholder='Your Email' />
        <input type='text' name='street' placeholder='Street' />
        <input type='text' name='postalCode' placeholder='Postal Code' />
        <Button btnType='Success' clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        {form}
      </div>
    );
  }
}

export default ContactData;