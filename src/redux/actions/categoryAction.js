import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";


export const getCategories = () => async (dispatch) => {
  try {
    await axios
      .get('https://localhost:7231/api/Categories')
      .then(response =>
        dispatch({
          type: ActionTypes.GET_CATEGORIES,
          payload: response.data
        })
      )
  } catch (err) {
    console.log(err);
  }
};