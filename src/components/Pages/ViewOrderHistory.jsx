/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import fetchOrderHistory from '../../actions/viewOrderHistory';
import cancelOrder from '../../actions/cancelOrder';


class ViewOrderHistory extends Component {
  componentDidMount = () => {
    const { action } = this.props;
    action.fetchOrderHistory();
  };
  render() {
    const { orders, action} = this.props;
    let count = 1;
    return (
      <div>
      <p className="menu-text">Orders</p>
      <div className="table-wrapper">
             <p id="error-text"></p>
             <div className="table" id="tb">
                 <div className="table-header">
                     <div className="table-cell">Order</div>
                     <div className="table-cell">Amount</div>
                     <div className="table-cell">Quantity</div>
                     <div className="table-cell">Status</div>
                     <div className="table-cell">Action</div>
                 </div>
                 { orders.map(orders => (
                   (
                    <div key={orders.id} className="table-row" id="row">
                   
                      <div key={orders.meal} className="table-cell">
                      {orders.meal}
                      </div>
                      <div key={orders.price} className="table-cell">
                      {orders.price}
                      </div>
                      <div key={orders.quantity} className="table-cell">
                      {orders.quantity}
                      </div>
                      <div  key={orders.status} className="table-cell">
                      <span>{orders.status}</span>
                      </div>
                      <div key={orders.id} className="table-cell">
                      <button className="button" onClick={() => action.cancelOrder(orders.id)}
                      >cancel</button>
                      </div>
                    </div>
                  )
                )
              )}
             </div>
     </div>
    </div>
    );
  }
}

ViewOrderHistory.propTypes = {
  orders: PropTypes.instanceOf(Array),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  orders: state.viewOrderHistory.orders,
  userId: state.auth.user.id
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      fetchOrderHistory,
      cancelOrder,
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(ViewOrderHistory);

