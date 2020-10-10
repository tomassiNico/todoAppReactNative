import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_TODOS_SUCCESS,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from '../constants';

const initialState = {
  todos: [],
  isFetching: false,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case FETCHING_DATA_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        todos: action.payload.todos,
      };
    case ADD_TODO:
      let newTodo = {...action.payload.todo, completed: false, userId: 1};
      let id = Math.floor(Math.random() * 100);
      const todoIds = state.todos.map((t) => t.id);
      if (todoIds.includes(id)) {
        id = Math.floor(Math.random() * 100);
      }
      newTodo = {...newTodo, id: id};
      return {
        ...state,
        todos: [newTodo, ...state.todos],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.todoId),
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: [
          action.payload.todo,
          ...state.todos.filter((todo) => todo.id !== action.payload.todo.id),
        ],
      };
    default:
      return state;
  }
};
