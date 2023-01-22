import { combineReducers } from "redux";
import { sliderReducer } from "./slider";

const reducers = combineReducers({
    allSliders: sliderReducer,
});

export default reducers;