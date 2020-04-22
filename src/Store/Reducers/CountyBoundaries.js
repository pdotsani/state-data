import {
  COUNTY_BOUNDARIES_ON,
  COUNTY_BOUNDARIES_OFF,
} from "../Actions/CountyBoundaries";

export default function CountyBoundaries(state = { toggle: false }, action) {
  switch (action.type) {
    case COUNTY_BOUNDARIES_ON:
      return {
        ...state,
        toggle: true,
      };
    case COUNTY_BOUNDARIES_OFF:
      return {
        ...state,
        toggle: false,
      };
    default:
      return state;
  }
}
