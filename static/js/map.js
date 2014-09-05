function refreshMap(e){
  bounds = map.getBounds();
  url = "features/within?lat1=" + bounds.getSouthWest().lat + "&lon1=" + bounds.getSouthWest().lng + "&lat2=" + bounds.getNorthEast().lat + "&lon2=" + bounds.getNorthEast().lng;
  $.get(url, updateMap, "json")
}

function updateMap(data){
  //clear the current pins
  map.removeLayer(markerLayerGroup);

  //add the new pins
  var markerArray = new Array(data.results.length);
  for (var i = 0; i < data.results.length; i++){
    var feature = data.results[i];
    popupBindTxt = feature.FEATURE_CLASS + " = " + feature.FEATURE_NAME;
    markerArray[i] = L.marker([feature.pos.coordinates[1], feature.pos.coordinates[0]]).bindPopup(popupBindTxt);
  }

  markerLayerGroup = L.layerGroup(markerArray).addTo(map);
}
