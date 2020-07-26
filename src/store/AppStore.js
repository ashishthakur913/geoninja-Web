import AppReducer from "../reducers/AppReducer";
import { applyMiddleware, compose, createStore } from 'redux';
import { fromJS } from 'immutable'
import thunkMiddleware from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const initialStore = fromJS({
	city: {
		lat: "47.3048",
		lng: "-117.9713",
		name: "Sprague",
		state: "Washington"
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