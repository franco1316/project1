import axios from "axios";

import { transfersActions } from "../slices/transfers.slice";

const API_URL = "https://localhost:4004/api/v1/transfers";

export const getUsersTransfers = (userId) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      //no hay endpoint de get en transfer por lado del servidor
      dispatch(transfersActions.getTransfers());
    } catch (error) {
      console.log(error);
    }
  };
};

export const newTransfer = (accountNumber, amount) => {
  return async (dispatch) => {
    try {
      // API REQUEST
      const transfer = { accountNumber, amount };
      const res = await axios.post(API_URL, transfer);
      const { newTransfer } = res.data;
      dispatch(transfersActions.newTransfer({ newTransfer }));
    } catch (error) {
      console.log(error);
    }
  };
};
