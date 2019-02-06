import axios from 'axios';
import * as types from './types';

export const getMeals = menu => ({
  type: types.GET_MEALS,
  menu,
});
export const getMealsError = errors => ({
  type: types.GET_MEALS,
  errors,
});

const fetchMeal = () => (dispatch) => {
	return axios.get('https://fast-food-pitaz.herokuapp.com/api/v1/menu').then(
		(res) => {
      dispatch(getMeals(res.data.data.items));
		}
	).catch((error) => {
		dispatch(getMealsError(error.response.data));
	});
};

export default fetchMeal;
