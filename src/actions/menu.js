import axios from 'axios';
import * as types from './types';

export const getMeals = menu => ({
  type: types.GET_MEALS,
  menu,
});
export const getMealsError = error => ({
  type: types.GET_MEALS,
  error,
});

const fetchMeal = () => (dispatch) => {
	return axios.get('https://fast-food-pitaz.herokuapp.com/api/v1/menu').then(
		(res) => {
      dispatch(getMeals(res.data.data.items));
		}
	).catch((error) => {
		console.log(error);
		
		dispatch(getMealsError(error.response.data));
	});
};

export default fetchMeal;
