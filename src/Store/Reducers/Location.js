import {
  UPDATE_LNG_LAT,
  UPDATE_ZOOM,
  RESET_TO_DEFAULT,
} from "../Actions/Location";

import { defaultConfig } from "../../Map/helper";

export default function Location(
  state = {
    lng: defaultConfig.lng,
    lat: defaultConfig.lat,
    zoom: defaultConfig.zoom,
  },
  action
) {
  switch (action.type) {
    case UPDATE_LNG_LAT:
      const { lng, lat } = action;
      return {
        ...state,
        lng,
        lat,
      };
    case UPDATE_ZOOM:
      const { zoom } = action;
      return {
        ...state,
        zoom,
      };
    case RESET_TO_DEFAULT:
      return {
        ...state,
        zoom: defaultConfig.zoom,
        lng: defaultConfig.lng,
        lat: defaultConfig.lat,
      };
    default:
      return state;
  }
}
