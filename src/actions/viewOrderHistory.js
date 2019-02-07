import axios from 'axios';
import * as types from './types';

export const getOrderHistory = orders => ({
  type: types.FETCH_ORDER_HISTORY,
  orders,
});
export const getOrderHistoryError = errors => ({
  type: types.FETCH_ORDER_HISTORY_FAIL,
  errors,
});

const fetchOrderHistory = () => (dispatch) => {
  
  return axios.get('https://fast-food-pitaz.herokuapp.com/api/v1/users/1/orders').then(
    (res) => {
      dispatch(getOrderHistory(res.data.data.items));
		}
	).catch((error) => {
		dispatch(getOrderHistoryError(error.response.message));
	});
};

export default fetchOrderHistory;
