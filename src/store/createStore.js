import { applyMiddleware,createStore, compose} from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger' 
import makeRootReducer from './reducers'
const log = createLogger({diff:true,collapsed:true});

export default (initialState = {}) => {
	const middleware = [thunk,log]
	const inhancers = []
	const store = createStore(
					makeRootReducer(),
					initialState,
					compose(
						applyMiddleware(...middleware),
						...inhancers
					 )
		);
	return store
};
