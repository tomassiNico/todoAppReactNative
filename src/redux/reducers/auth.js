import {LOGIN, LOGOUT} from '../constants';

const initialState = {
  isLogged: false,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        user: action.payload.user,
      };
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: null,
      };
    default:
      return state;
  }
};