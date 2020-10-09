import {combineReducers} from 'redux';
import todosReducer from './todos';
import authReducer from './auth';

console.log('todosReducer => ', todosReducer)

const reducers = combineReducers({
  todos: todosReducer,
  auth: authReducer,
});

export default reducers;