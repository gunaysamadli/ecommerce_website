import { combineReducers } from "redux";
import { brandReducer } from "./brand";
import { sliderReducer } from "./slider";

const reducers = combineReducers({
    allSliders: sliderReducer,
    allBrands: brandReducer,

});

export default reducers;