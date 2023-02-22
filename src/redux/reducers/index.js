import { combineReducers } from "redux";
import { brandReducer } from "./brand";
import { colorReducer } from "./color";
import { productReducer } from "./product";
import { sliderReducer } from "./slider";

const reducers = combineReducers({
    allSliders: sliderReducer,
    allBrands: brandReducer,
    allColors: colorReducer,
    allProducts: productReducer
});

export default reducers;