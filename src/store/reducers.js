import { combineReducers } from 'redux'
import { HomeReducer as home } from '../routes/Home/modules/home'
export const makeRootReducers = () => {
	return combineReducers({home});
}

export default makeRootReducers;