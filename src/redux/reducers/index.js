import { combineReducers } from "redux";
import { brandReducer } from "./brand";
import { colorReducer } from "./color";
import { sliderReducer } from "./slider";

const reducers = combineReducers({
    allSliders: sliderReducer,
    allBrands: brandReducer,
    allColors: colorReducer,

});

export default reducers;