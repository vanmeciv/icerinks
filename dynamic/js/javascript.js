// 2019 Stanley Cup Events Automated from Python Code
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrY3AzY3QxazBkN2UycmxlZG5uYjFueHIifQ.mLIK3f-mL_oe6YidlLQqSA';
// Set bounds to New York, New York
var bounds = [
  [-110, -85], // [west, south]
  [110, 85]  // [east, north]
];

var map = new mapboxgl.Map({
container: 'map',
center: [0,0],
zoom: 1,
attributionControl: false,
style: 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny',
maxBounds: bounds,
});
// https://docs.mapbox.com/mapbox-gl-js/example/image-on-a-map/
// map.on('load', function() {
//             map.addSource("myImageSource", {
//                 "type": "image",
//                 "url": "https://hockeyrink.geospatial.is/static/assets/img/mytable.png",
//                 "coordinates": [
//                   [-150, 55],
//                   [200,55],
//                   [200,-55],
//                   [-150,-55]
//                 ]
//             });
//
//             map.addLayer({
//                 "id": "overlay",
//                 "source": "myImageSource",
//                 "type": "raster",
//                 "paint": {
//                 "raster-opacity": 0.85
//                 }
//             });
//         });



// Set the map's max bounds.
// map.setMaxBounds(bounds);

// var map = L.mapbox.map('map', 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny', {
//         minZoom: 5,
//         maxZoom: 12,
//         // maxBounds: [[-105, -50],[105,50]]
//     }).setView([0, 0], 9);



// map.addControl(new mapboxgl.AttributionControl(), 'top-right');


//
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
//




// Set the map's max bounds.
// map.setMaxBounds(bounds);

// var map = L.mapbox.map('map', 'mapbox://styles/isaacv/ck7b0xxc80bj61ipmar9jkwny', {
//         minZoom: 5,
//         maxZoom: 12,
//         // maxBounds: [[-105, -50],[105,50]]
//     }).setView([0, 0], 9);



// map.addControl(new mapboxgl.AttributionControl(), 'top-right');
