import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  products: [],
  loading: false,
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state.products, products: payload }
    default:
      return state;
  }
};