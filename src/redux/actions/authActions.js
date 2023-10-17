import { LOGIN_SUCCESS, LOGOUT } from "../actionTypes/actionType";

export const login = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};