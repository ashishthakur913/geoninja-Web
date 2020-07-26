import AppReducer from "../reducers/AppReducer";
import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable'
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initialStore = fromJS({
	city: {
		name:"San Jose",
		state:"California",
		lat:"37.3021",
		lng:"-121.8489"
	},
	common: {
		loader: {
			visible: false
		}
	}
})

export default createStore(AppReducer,
	initialStore,
	composeEnhancers(applyMiddleware(thunkMiddleware))
);