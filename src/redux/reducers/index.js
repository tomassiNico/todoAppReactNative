import {combineReducers} from 'redux';
import todosReducer from './todos';
import authReducer from './auth';

const reducers = combineReducers({
  todos: todosReducer,
  auth: authReducer,
});

export default reducers;