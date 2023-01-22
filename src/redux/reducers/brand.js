import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  brands: [],
  loading: false,
};

export const brandReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_BRANDS:
      return { ...state.brands, brands: payload }
    default:
      return state;
  }
};
