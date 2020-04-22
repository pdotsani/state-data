import mapboxgl from "mapbox-gl";
mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export const defaultConfig = {
  lng: -119.41,
  lat: 36.77,
  zoom: 5,
};

export function loadMap(mapContainer) {
  return new mapboxgl.Map({
    container: mapContainer,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [defaultConfig.lng, defaultConfig.lat],
    zoom: defaultConfig.zoom,
  });
}

export function onLoadConfig(map) {
  map.on("load", () => {
    map.addSource("caCounties", {
      type: "vector",
      url: "mapbox://pdotsani.0dauuj0t",
    });

    map.addLayer({
      id: "ca-county-boundaries",
      type: "line",
      source: "caCounties",
      "source-layer": "ca-county-boundaries-3ixo9m",
      paint: {
        "line-color": "#607D8B",
        "line-width": 3,
      },
    });
  });
}

export function onMoveConfig(map, updateCoords, updateZoom) {
  map.on("move", () => {
    let lng = map.getCenter().lng.toFixed(4);
    let lat = map.getCenter().lat.toFixed(4);
    let zoom = map.getZoom().toFixed(2);
    updateCoords(lng, lat);
    updateZoom(zoom);
  });
}
