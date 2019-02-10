/* eslint-disable react/jsx-no-bind */
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import fetchOrderHistory from '../../actions/viewOrderHistory';
import cancelOrder from '../../actions/cancelOrder';
import TableRow from '../UI/table/TableRow.jsx';


class ViewOrderHistory extends Component {
  componentDidMount = () => {
    const { action, userId } = this.props;
    action.fetchOrderHistory(userId);
  };
  render() {
    // const { orders } = this.props;
    return (
      <div className='history'>
      <p className="menu-text">Orders</p>
      <div className="table-wrapper">
             <div className="table" id="tb">
                 <div className="table-header">
                     <div className="table-cell">Order</div>
                     <div className="table-cell">Amount</div>
                     <div className="table-cell">Quantity</div>
                     <div className="table-cell">Status</div>
                     <div className="table-cell">Action</div>
                 </div>
                    <TableRow {...this.props} key={`a${this.props.orders.id}`} />
             </div>
     </div>
    </div>
    );
  }
}

ViewOrderHistory.propTypes = {
  orders: PropTypes.instanceOf(Array),
  userId: PropTypes.number,
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

