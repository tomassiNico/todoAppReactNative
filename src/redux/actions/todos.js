import {fetchTodosData} from '../../api/api';
import {
  FETCHING_DATA,
  FETCHING_DATA_FAILURE,
  FETCHING_DATA_TODOS_SUCCESS,
  ADD_TODO,
  REMOVE_TODO,
  EDIT_TODO,
} from '../constants';

export const fetchData = () => {
  return {
    type: FETCHING_DATA,
  };
};

export const saveTodoList = (todos) => {
  return {
    type: FETCHING_DATA_TODOS_SUCCESS,
    payload: {
      todos,
    },
  };
};

export const errorFetch = () => {
  return {
    type: FETCHING_DATA_FAILURE,
  };
};

export const fetchTodoList = () => {
  return (dispatch) => {
    dispatch(fetchData());

    fetchTodosData()
      .then(({data}) => {
        const todos = data.slice(0,20);
        dispatch(saveTodoList(todos));
      })
      .catch(() => dispatch(errorFetch()));
  };
};

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: {
      todo,
    },
  };
};

export const removeTodo = (todoId) => {
  return {
    type: REMOVE_TODO,
    payload: {
      todoId,
    },
  };
};

export const editTodo = (todo) => {
  return {
    type: EDIT_TODO,
    payload: {
      todo,
    },
  };
};

export default {
  fetchData,
  saveTodoList,
  errorFetch,
  fetchTodoList,
  addTodo,
  removeTodo,
  editTodo,
};
