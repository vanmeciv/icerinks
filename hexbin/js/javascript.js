// Blank Rink
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrY3AzY3QxazBkN2UycmxlZG5uYjFueHIifQ.mLIK3f-mL_oe6YidlLQqSA';
// Set bounds for maptile
// DO NOT TOUCH!!!
var bounds = [
  [-195, -90], // [west, south]
  [205, 90]  // [east, north]
];

var map = new mapboxgl.Map({
container: 'map',
center: [0,0],
zoom: .001,
attributionControl: false,
style: 'mapbox://styles/isaacv/ck9n5j6ch0h6p1immcg0dc3hr',
maxBounds: bounds,
});
// https://docs.mapbox.com/mapbox-gl-js/example/image-on-a-map/
map.on('load', function() {
    map.addSource("myImageSource", {
        "type": "image",
        "url": "https://hockeyrink.geospatial.is/hexbin/img/mytable.png",
        // Sets image size
        "coordinates": [
          [-145, 60], //NW corner
          [135, 60], //NE Corner
          [135, -75], //SE Corner
          [-145, -75] //SW Corner
        ]
    });

    map.addLayer({
        "id": "overlay",
        "source": "myImageSource",
        "type": "raster",
        "paint": {
        "raster-opacity": 0.85
        }
    });
});



// Set the map's max bounds.
// map.setMaxBounds(bounds);

// var map = L.mapbox.map('map', 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny', {
//         minZoom: 5,
//         maxZoom: 12,
//         // maxBounds: [[-105, -50],[105,50]]
//     }).setView([0, 0], 9);



// map.addControl(new mapboxgl.AttributionControl(), 'top-right');



// // Single Games Events (Redwings vs. Lightning)
// mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrMnpqYnVxaTA1b3IzbXBnaG5zY3o3eTEifQ.kMdIcXYBFKHTorj3Hxgi7g';
// // Set bounds to New York, New York
// var bounds = [
//   [-110, -85], // [west, south]
//   [110, 85]  // [east, north]
// ];
//
// var map = new mapboxgl.Map({
// container: 'map',
// center: [0,0],
// zoom: 1,
// attributionControl: false,
// style: 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny',
// maxBounds: bounds,
// });





// Set the map's max bounds.
// map.setMaxBounds(bounds);

// var map = L.mapbox.map('map', 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny', {
//         minZoom: 5,
//         maxZoom: 12,
//         // maxBounds: [[-105, -50],[105,50]]
//     }).setView([0, 0], 9);



// map.addControl(new mapboxgl.AttributionControl(), 'top-right');
