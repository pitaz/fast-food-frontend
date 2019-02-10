/* eslint-disable react/jsx-no-bind */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import placeOrder from '../../actions/placeOrder';
import fetchSingleMenu from '../../actions/getSingleMenu';
import mealImage from '../../../public/images/EGUSI-SOUP-EFO-ELEGUSI-ed.jpg';

export class SingelMenuOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
        qty: 1
    };
}
componentDidMount = () => {
  const { match, action } = this.props;
  action.fetchSingleMenu(match.params.id);
}

handleChange = (e) => {
  this.setState({
      [e.target.name]: e.target.value
  });
}

render() {
  const { action, menu, userId, history } = this.props;
  return (
    <div className="container">
      <p className="menu-text">Order checkout</p>
        <div className="card-wrapper card" id="checkout-section">
        {(menu && menu.id && (
          <div className="card-content">

            <img id="image"  src={mealImage}/>
            <h3 id="price">{`NGN${menu.price}`}</h3>
            <p id="meal">{menu.name}</p>
            <label>Quantity</label>
            <input type="number" name='qty' value={this.state.qty} min="1" onChange={e => this.handleChange(e)} />
            <button onClick={() => action
              .placeOrder({
                meal: `${menu.name}`,
                  userId: `${userId}`,
                  quantity: `${this.state.qty}`,
                  price: `${menu.price}`
              }, history)}>Place order</button>
              
              </div>
              ))}
        </div>  
  </div>
  );
}
}

SingelMenuOption.propTypes = {
  history: PropTypes.instanceOf(Object),
  menu: PropTypes.instanceOf(Object),
  match: PropTypes.instanceOf(Object),
  userId: PropTypes.number,
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  menu: state.menuReducer.singleMenu,
  userId: state.auth.user.id,
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      placeOrder,
      fetchSingleMenu
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(SingelMenuOption);


