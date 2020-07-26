import { SET_CITY, SET_LOADER_VISIBILITY } from "../actions/AppActions";
import { fromJS } from "immutable";
import { initialStore } from "../store/AppStore"

function AppReducer(state=initialStore, action){
    switch(action.type) {
        case SET_CITY:
			return state.withMutations(state => {
				state.setIn(['city','name'], action.city.name)
				state.setIn(['city','state'], action.city.state)
				state.setIn(['city','lat'], action.city.lat)
				state.setIn(['city','lng'], action.city.lng)
			});
        case SET_LOADER_VISIBILITY:
          return state.setIn(['common', 'loader', 'visible'], action.visibility)
         default: 
           return state;
     }
}

export default AppReducer;