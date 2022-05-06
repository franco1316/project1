import axios from "axios";

import { usersActions } from "../slices/user.slice";

const API_URL = "https://localhost:4004/api/v1/users";

export const login = (accountNumber, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const newLogin = { accountNumber, password };
      const res = await axios.post(API_URL+"/login", newLogin);
      const logged = res.data.status;
      dispatch(usersActions.login({ logged }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (name, email, password) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const signUp = { name, email, password };
      const res = await axios.post(API_URL+"/signup", signUp);
      const { newAccount } = res.data;
      dispatch(usersActions.signup({ newAccount }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    try {
      dispatch(usersActions.logout());
    } catch (error) {
      console.log(error);
    }
  };
};
