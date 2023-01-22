import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  colors: [],
  loading: false,
};

export const colorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_COLORS:
      return { ...state.colors, colors: payload }
    default:
      return state;
  }
};