import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";


export const getBrands = () => async (dispatch) => {
  try {
    await axios
      .get('https://localhost:7231/api/Brands')
      .then(response =>
        dispatch({
          type: ActionTypes.GET_BRANDS,
          payload: response.data
        })
      )
  } catch (err) {
    console.log(err);
  }
};
