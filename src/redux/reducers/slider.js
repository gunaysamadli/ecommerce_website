import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  sliders: [],
  loading: false,
};

export const sliderReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_SLIDERS:
      return { ...state.sliders, sliders: payload }
    default:
      return state;
  }
};

