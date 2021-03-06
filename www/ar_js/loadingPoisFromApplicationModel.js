
/* this is a dummy implementation to create poi-data, which are passed over to JS / Wikitude SDK on first location update */
function onLocationUpdated(tourJSON) {
    // inject POI data in JSON-format to JS
    var poiData = [];
    for (var i = 0; i < tourJSON.length; i++) {
        poiData.push({
            "id": (i + 1),
            "longitude": parseFloat(tourJSON[i].location_long),
            "latitude": parseFloat(tourJSON[i].location_lat),
            "description": tourJSON[i].description,
            "title": tourJSON[i].title,
            "image": tourJSON[i].image,
            "artwork_id": tourJSON[i].artwork_id
        });
    }
    app.wikitudePlugin.callJavaScript("World.loadPoisFromJsonData(" + JSON.stringify(poiData) +");");
}