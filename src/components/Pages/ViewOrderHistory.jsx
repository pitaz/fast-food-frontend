/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import fetchOrderHistory from '../../actions/viewOrderHistory';


class ViewOrderHistory extends Component {
  componentDidMount = () => {
    const { action } = this.props;
    action.fetchOrderHistory();
  };
  render() {
    const { orders } = this.props;
    let count = 1;
    return (
      <div>
      <p className="menu-text">Orders</p>
      <div className="table-wrapper">
             <p id="error-text"></p>
             <table className="table" id="tb">
                 <tr className="table-header">
                     <td className="table-cell">S/N</td>
                     <td className="table-cell">Order</td>
                     <td className="table-cell">Amount</td>
                     <td className="table-cell">Quantity</td>
                     <td className="table-cell">Status</td>
                     <td className="table-cell">Action</td>
                 </tr>
                 { orders.map(orders => (
                   (
                    <tr key={orders.id} className="table-row" id="row">
                      <div key={orders.id} className="table-cell">
                       {count++}
                      </div>
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
                      <button className="button">cancel</button>
                      </div>
                    </tr>
                  )
                )
              )}
             </table>
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
    },
    dispatch
  )
});

export default connect(mapStateToProps, matchDispatchToProps)(ViewOrderHistory);

