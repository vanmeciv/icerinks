// https://docs.mapbox.com/mapbox-gl-js/example/filter-markers/
mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrYjV1Z3lxODB4NHMzMG84ZzFocXc1bmYifQ.Wizy1tWvNjdboiGToeAZHQ';
var places = {
  "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            0,
            0
          ]
        },
        "properties": {
          "FIELD1": 3,
          "Event": "Faceoff",
          "Description": "Oskar Sundqvist faceoff won against Sean Kuraly",
          "Team": "St. Louis Blues",
          "Tricode": "STL",
          "Period": 1,
          "Time": "0:10",
          "Date": "2019-05-28T00:25:57Z",
          "Home_Away_Team": "Away"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            -20,
            22
          ]
        },
        "properties": {
          "FIELD1": 5,
          "Event": "Faceoff",
          "Description": "Sean Kuraly faceoff won against Oskar Sundqvist",
          "Team": "Boston Bruins",
          "Tricode": "BOS",
          "Period": 1,
          "Time": "0:28",
          "Date": "2019-05-28T00:26:51Z",
          "Home_Away_Team": "Home"
        }
      },
      {
        "type": "Feature",
        "geometry": {
          "type": "Point",
          "coordinates": [
            47,
            -19
          ]
        },
        "properties": {
          "FIELD1": 6,
          "Event": "Shot",
          "Description": "Charlie McAvoy Wrist Shot saved by Jordan Binnington",
          "Team": "Boston Bruins",
          "Tricode": "BOS",
          "Period": 1,
          "Time": "0:28",
          "Date": "2019-05-28T00:26:51Z",
          "Home_Away_Team": "Home"
        }
      },
{
'type': 'Feature',
'properties': {
'icon': 'music'
},
'geometry': {
'type': 'Point',
'coordinates': [-77.007481, 38.876516]
}
}
]
};

var filterGroup = document.getElementById('filter-group');
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/isaacv/ck9n5j6ch0h6p1immcg0dc3hr',
center: [-77.04, 38.907],
zoom: 11.15
});

map.on('load', function() {
// Add a GeoJSON source containing place coordinates and information.
map.addSource('places', {
'type': 'geojson',
'data': places
});

places.features.forEach(function(feature) {
var symbol = feature.properties['icon'];
var layerID = 'poi-' + symbol;

// Add a layer for this symbol type if it hasn't been added already.
if (!map.getLayer(layerID)) {
map.addLayer({
'id': layerID,
'type': 'symbol',
'source': 'places',
'layout': {
'icon-image': symbol + '-15',
'icon-allow-overlap': true
},
'filter': ['==', 'icon', symbol]
});

// Add checkbox and label elements for the layer.
var input = document.createElement('input');
input.type = 'checkbox';
input.id = layerID;
input.checked = true;
filterGroup.appendChild(input);

var label = document.createElement('label');
label.setAttribute('for', layerID);
label.textContent = symbol;
filterGroup.appendChild(label);

// When the checkbox changes, update the visibility of the layer.
input.addEventListener('change', function(e) {
map.setLayoutProperty(
layerID,
'visibility',
e.target.checked ? 'visible' : 'none'
);
});
}
});
});


// mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrYjV1Z3lxODB4NHMzMG84ZzFocXc1bmYifQ.Wizy1tWvNjdboiGToeAZHQ';
// var map = new mapboxgl.Map({
// container: 'map',
// center: [-122.4443, 47.2529],
// zoom: 1,
// attributionControl: false,
// style: 'mapbox://styles/isaacv/ck9n5j6ch0h6p1immcg0dc3hr'
// });
// map.addControl(new mapboxgl.AttributionControl(), 'top-right');
//
// map.on('load', function () {
//
//
//   map.addSource('earthquakes', {
//           "type": "geojson",
//           "data": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojson"
//       });
//     // add custom icon to the map (https://docs.mapbox.com/mapbox-gl-js/example/add-image/)
//     map.loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Antu_earthquake.svg/512px-Antu_earthquake.svg.png', function(error, image) {
//         if (error) throw error;
//         map.addImage('quake', image);
//         map.addLayer({
//             "id": "Earthquakes",
//             "type": "symbol",
//             "source": "earthquakes",
//             "layout": {
//                 "icon-image": "quake",
//                 "icon-size": 0.075,
//                 "visibility":"visible"
//             }
//         });
//     });
//
//   map.addSource('contours', {
//     type: 'vector',
//     url: 'mapbox://mapbox.mapbox-terrain-v2'
//     });
//   map.addLayer({
//     'id': 'Contours',
//     'type': 'line',
//     'source': 'contours',
//     'source-layer': 'contour',
//         'layout': {
//         'visibility': 'visible',
//         'line-join': 'round',
//         'line-cap': 'round'
//         },
//     'paint': {
//         'line-color': '#877b59',
//         'line-width': 1
//         }
//     });
//   });
//
// var toggleableLayerIds = [ 'Contours', 'Earthquakes' ];
//
// for (var i = 0; i < toggleableLayerIds.length; i++) {
// var id = toggleableLayerIds[i];
//
// var link = document.createElement('a');
// link.href = '#';
// link.className = 'active';
// link.textContent = id;
//
// link.onclick = function (e) {
// var clickedLayer = this.textContent;
// e.preventDefault();
// e.stopPropagation();
//
// var visibility = map.getLayoutProperty(clickedLayer, 'visibility');
//
// if (visibility === 'visible') {
// map.setLayoutProperty(clickedLayer, 'visibility', 'none');
// this.className = '';
// } else {
// this.className = 'active';
// map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
// }
// };
//
// var layers = document.getElementById('layerToggleMenu');
// layers.appendChild(link);
// }
//
// //add a handler for clicking/popups
// //Thanks to: https://www.mapbox.com/mapbox-gl-js/example/popup-on-click/
// map.on('click', 'Earthquakes', function (e) {
//       //1. set the coordinates of the popup
//       var coordinates = e.features[0].geometry.coordinates;
//       //2. create the information that will display in the popup
//       // var description = e.features[0].properties.title;
//       var depth = e.features[0].geometry.depth;
//       var description = "<h4>"+e.features[0].properties.title+"</h4>" + "<p>Depth: " + e.features[0].geometry.depth + "<br>Status: " + e.features[0].properties.status + "<br> Tsunami: " + e.features[0].properties.tsunami + "<br> More Details: " + "<a target='_blank' href=" + e.features[0].properties.url + ">Click Here</a>";
//       //3. make the popup
//       new mapboxgl.Popup()
//               .setLngLat(coordinates)
//               .setHTML(description)
//               .addTo(map);
// });
//
//
// // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
// map.on('click', 'Earthquakes', function (e) {
// map.flyTo({center: e.features[0].geometry.coordinates});
// });
//
// // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
// map.on('mouseenter', 'Earthquakes', function () {
// map.getCanvas().style.cursor = 'pointer';
// });
//
// // Change it back to a pointer when it leaves.
// map.on('mouseleave', 'Earthquakes', function () {
// map.getCanvas().style.cursor = '';
// });
//


// // 2019 Stanley Cup Events Automated from Python Code
// mapboxgl.accessToken = 'pk.eyJ1IjoiaXNhYWN2IiwiYSI6ImNrYjV1Z3lxODB4NHMzMG84ZzFocXc1bmYifQ.Wizy1tWvNjdboiGToeAZHQ';
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
