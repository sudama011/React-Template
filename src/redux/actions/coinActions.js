import { GET_COIN } from "../actionTypes/actionType";

export const getCoin = (coin) => {
  return {
    type: GET_COIN,
    payload: coin,
  };
};
