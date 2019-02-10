import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const TableCell = (props) => {
  console.log(props);
  const {orders, className } = props;
  return (
    <div className={className}>
    { props.children }
    </div>
  );
};

TableCell.propTypes = {
  orders: PropTypes.instanceOf(Array),
  children: PropTypes.node,
  className: PropTypes.string,
  userId: PropTypes.number,
  action: PropTypes.instanceOf(Object)
};
export default TableCell;
