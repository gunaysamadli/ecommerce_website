import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";


export const getProducts = () => async (dispatch) => {
  try {
    await axios
      .get('https://localhost:7231/api/Products')
      .then(response =>
        dispatch({
          type: ActionTypes.GET_PRODUCTS,
          payload: response.data
        })
      )
  } catch (err) {
    console.log(err);
  }
};
