import { combineReducers } from 'redux';
import PeopleReducer from './people-reducer'
import ObservationsReducer from './observations-reducer'

const rootReducer = combineReducers({
	people: PeopleReducer,
  observations: ObservationsReducer
});

export default rootReducer;