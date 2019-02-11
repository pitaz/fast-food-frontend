/* eslint-disable react/jsx-no-bind */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import TableCell from './TableCell.jsx';

const TableRow = (props) => {
  const {orders, action} = props;
  return (
    <Fragment>
    { orders && orders.map(orders => (
        ( 
      <div key={orders.id} className="table-row" id="row">
      <TableCell key={orders.meal} className="table-cell">{orders.meal}</TableCell>
      <TableCell key={orders.price} className="table-cell">{orders.price}</TableCell>
      <TableCell key={orders.quantity} className="table-cell">{orders.quantity}</TableCell>
      <TableCell key={orders.status} className="table-cell">{orders.status}</TableCell>
      <TableCell key={orders.id} className="table-cell">
      <button className='btn-action danger' onClick={() => action.cancelOrder(orders.id)}
      >delete</button>
      </TableCell>
      </div>
      )
      )
    )}
    </Fragment>
  );
};

TableRow.propTypes = {
  orders: PropTypes.instanceOf(Array),
  userId: PropTypes.number,
  action: PropTypes.instanceOf(Object)
};

export default TableRow;
