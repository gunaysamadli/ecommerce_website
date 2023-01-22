import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";


export const getColors = () => async (dispatch) => {
  try {
    await axios
      .get('https://localhost:7231/api/Colors')
      .then(response =>
        dispatch({
          type: ActionTypes.GET_COLORS,
          payload: response.data
        })
      )
  } catch (err) {
    console.log(err);
  }
};