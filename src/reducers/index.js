import { combineReducers } from 'redux';
import PeopleReducer from './people-reducer'
import ObservationsReducer from './observations-reducer'
import UserReducer from './user-reducer'

const rootReducer = combineReducers({
	people: PeopleReducer,
  observations: ObservationsReducer,
  user: UserReducer
});

export default rootReducer;