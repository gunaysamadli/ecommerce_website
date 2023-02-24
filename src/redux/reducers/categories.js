import { ActionTypes } from "../contants/actionTypes";

const initialState = {
  categories: [],
  loading: false,
};

export const categoryReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_CATEGORIES:
      return { ...state.categories, categories: payload }
    default:
      return state;
  }
};
