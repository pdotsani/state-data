export const UPDATE_LNG_LAT = "UPDATE_LNG_LAT";
export const UPDATE_ZOOM = "UPDATE_ZOOM";
export const RESET_TO_DEFAULT = "RESET_TO_DEFAULT";

export function updateLngLat(lng, lat) {
  return {
    lng,
    lat,
    type: UPDATE_LNG_LAT,
  };
}

export function updateZoom(zoom) {
  return {
    zoom,
    type: UPDATE_ZOOM,
  };
}

export function resetToDefault() {
  return {
    type: RESET_TO_DEFAULT,
  };
}
