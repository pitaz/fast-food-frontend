import axios from 'axios';
import {toastr} from 'react-redux-toastr';
import { PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL } from './types';

export const placeOderSuccess = order => ({
  type: PLACE_ORDER_SUCCESS,
  order,
});

export const placeOderFail = error => ({
  type: PLACE_ORDER_FAIL,
  error,
});

const placeOrder = (payload, history) => dispatch => {
  let message = '';
  return axios.post('https://fast-food-pitaz.herokuapp.com/api/v1/orders', payload).then(
		(res) => {
      dispatch(placeOderSuccess(res.data.data));
      toastr.success('Success', res.data.message);
      history.push('/menu');
		}
	).catch((error) => {
    if (error.response.status === 401) message = 'You must be logged in to place an order';
    if (error.response.status === 500) message = 'Oops something went wrong, try again!';
    dispatch(placeOderFail(error.response.data.message));
    toastr.error('Operation unsuccessful', message);
	});
};

export default placeOrder;
