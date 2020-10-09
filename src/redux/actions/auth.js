import {LOGIN, LOGOUT} from '../constants';

export const logIn = (user) => {
  return {
    type: LOGIN,
    payload: {
      user,
    },
  };
};

export const logOut = () => {
  return {
    type: LOGOUT,
  };
};

export default {
  logIn,
  logOut,
};
