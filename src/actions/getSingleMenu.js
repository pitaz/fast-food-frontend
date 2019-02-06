import axios from 'axios';
import * as types from './types';

export const getSingleMenu = menu => ({
  type: types.GET_SINGLE_MENU,
  menu,
});
export const getSingleMenuError = errors => ({
  type: types.GET_SINGLE_MENU_FAIL,
  errors,
});

const fetchSingleMenu = (mealId) => (dispatch) => {
	return axios.get(`https://fast-food-pitaz.herokuapp.com/api/v1/menu/${mealId}`).then(
		(res) => {
      dispatch(getSingleMenu(res.data.data.item));
		}
	).catch((error) => {
		dispatch(getSingleMenuError(error.response.data));
	});
};

export default fetchSingleMenu;
