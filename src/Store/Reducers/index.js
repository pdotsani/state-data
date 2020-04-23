import { createStore, combineReducers } from "redux";
import { reducer as reduxAsyncConnect } from "redux-connect";

import CountyBoundaries from "./CountyBoundaries";
import Location from "./Location";

const reducer = combineReducers({
  reduxAsyncConnect,
  CountyBoundaries,
  Location,
});

export default createStore(reducer);
