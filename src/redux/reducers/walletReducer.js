import { GET_COIN } from "../actionTypes/actionType";

const initialState = {
  coin: null,
};

const coinReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN:
      return {
        ...state,
        coin: action.payload,
      };
    default:
      return state;
  }
};


export default coinReducer;