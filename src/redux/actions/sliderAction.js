import { ActionTypes } from "../contants/actionTypes";
import axios from "axios";


export const getSliders = () => async (dispatch) => {
  try {
    await axios
      .get('https://localhost:7231/api/Sliders')
      .then(response =>
        dispatch({
          type: ActionTypes.GET_SLIDERS,
          payload: response.data
        })
      )
  } catch (err) {
    console.log(err);
  }
};











