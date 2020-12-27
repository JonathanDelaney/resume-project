document.getElementById("restart-button").onclick = function () { initMap() };
document.getElementById("submit-coords").onclick = function () { setMarkers() };
let locations = [];

function setMarkers() {
    let latv = parseFloat(document.getElementById("latitude").value, 10);
    let lngv = parseFloat(document.getElementById("longitude").value, 10);
    console.log(latv, lngv);
    locations.push({ lat: latv, lng: lngv });
    console.log(locations);
    return locations;
}

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 1,
        center: {
            lat: 41.047867,
            lng: 12.898272
        }
    });

    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // var locations = [
    //     { lat: 40.785091, lng: -73.968285 },
    //     { lat: 41.084045, lng: -73.874245 },
    //     { lat: 40.754932, lng: -73.984016 }
    // ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        })
    })

    new MarkerClusterer(map, markers, {
        imagePath:
            "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
}