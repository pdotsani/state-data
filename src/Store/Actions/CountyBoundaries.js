export const COUNTY_BOUNDARIES_TOGGLE = "COUNTY_BOUNDARIES_TOGGLE";

export function countyBoundariesToggle(toggle) {
  return {
    toggle: !toggle,
    type: COUNTY_BOUNDARIES_TOGGLE,
  };
}
