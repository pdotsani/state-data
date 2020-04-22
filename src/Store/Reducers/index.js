import { createStore, combineReducers } from "redux";

import CountyBoundaries from "./CountyBoundaries";
import Location from "./Location";

const reducer = combineReducers({ CountyBoundaries, Location });

export default createStore(reducer);
