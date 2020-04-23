import { COUNTY_BOUNDARIES_TOGGLE } from "../Actions/CountyBoundaries";

export default function CountyBoundaries(state = { toggle: true }, action) {
  switch (action.type) {
    case COUNTY_BOUNDARIES_TOGGLE:
      const { toggle } = action;
      return {
        ...state,
        toggle,
      };
    default:
      return state;
  }
}
