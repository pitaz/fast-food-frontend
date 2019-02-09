import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import * as types from './types';

export const cancelOrderSuccess = orderId => ({
  type: types.CANCEL_ORDER,
  orderId,
});
export const cancelOrderError = error => ({
  type: types.CANCEL_ORDER_FAIL,
  error,
});

const  cancelOrder = (orderId) => (dispatch) => {
	return axios.delete(`https://fast-food-pitaz.herokuapp.com/api/v1/orders/${orderId}`).then(
		(res) => {
      dispatch(cancelOrderSuccess(orderId));
      toastr.warning('Order has been cancelled');
		}
	).catch((error) => {
		dispatch(cancelOrderError(error.response));
	});
};

export default cancelOrder;
