function initialize() {
  var pointarray, heatmap;

  var dummyData = [
    new google.maps.LatLng(37.765598, -122.412883),
    new google.maps.LatLng(37.765543, -122.413039),
    new google.maps.LatLng(37.765532, -122.413125),
    new google.maps.LatLng(37.765500, -122.413553),
    new google.maps.LatLng(37.765448, -122.414053),
    new google.maps.LatLng(37.765388, -122.414645),
    new google.maps.LatLng(37.765323, -122.415250),
    new google.maps.LatLng(37.765303, -122.415847),
    new google.maps.LatLng(37.765251, -122.416439),
    new google.maps.LatLng(37.765204, -122.417020),
    new google.maps.LatLng(37.765172, -122.417556),
    new google.maps.LatLng(37.765164, -122.418075),
    new google.maps.LatLng(37.765153, -122.418618),
    new google.maps.LatLng(37.765136, -122.419112),
    new google.maps.LatLng(37.765129, -122.419378),
    new google.maps.LatLng(37.765119, -122.419481),
    new google.maps.LatLng(37.765100, -122.419852),
    new google.maps.LatLng(37.765083, -122.420349),
    new google.maps.LatLng(37.765045, -122.420930),
    new google.maps.LatLng(37.764992, -122.421481),
    new google.maps.LatLng(37.764980, -122.421695),
    new google.maps.LatLng(37.764993, -122.421843),
    new google.maps.LatLng(37.764986, -122.422255),
    new google.maps.LatLng(37.764975, -122.422823),
    new google.maps.LatLng(37.764939, -122.423411),
    new google.maps.LatLng(37.764902, -122.424014),
    new google.maps.LatLng(37.764853, -122.424576),
    new google.maps.LatLng(37.764826, -122.424922),
    new google.maps.LatLng(37.764796, -122.425375),
    new google.maps.LatLng(37.764782, -122.425869),
    new google.maps.LatLng(37.764768, -122.426089),
    new google.maps.LatLng(37.764766, -122.426117),
    new google.maps.LatLng(37.764723, -122.426276),
    new google.maps.LatLng(37.764681, -122.426649),
    new google.maps.LatLng(37.782012, -122.404200),
    new google.maps.LatLng(37.781574, -122.404911),
    new google.maps.LatLng(37.781055, -122.405597),
    new google.maps.LatLng(37.780479, -122.406341),
    new google.maps.LatLng(37.779996, -122.406939),
    new google.maps.LatLng(37.779459, -122.407613),
    new google.maps.LatLng(37.778953, -122.408228),
    new google.maps.LatLng(37.778409, -122.408839),
    new google.maps.LatLng(37.777842, -122.409501),
    new google.maps.LatLng(37.777334, -122.410181),
    new google.maps.LatLng(37.776809, -122.410836),
    new google.maps.LatLng(37.776240, -122.411514),
    new google.maps.LatLng(37.775725, -122.412145),
    new google.maps.LatLng(37.775190, -122.412805),
    new google.maps.LatLng(37.774672, -122.413464),
    new google.maps.LatLng(37.774084, -122.414186),
    new google.maps.LatLng(37.773533, -122.413636),
    new google.maps.LatLng(37.773021, -122.413009),
    new google.maps.LatLng(37.772501, -122.412371),
    new google.maps.LatLng(37.771964, -122.411681),
    new google.maps.LatLng(37.771479, -122.411078),
    new google.maps.LatLng(37.770992, -122.410477),
    new google.maps.LatLng(37.770467, -122.409801),
    new google.maps.LatLng(37.770090, -122.408904),
    new google.maps.LatLng(37.769657, -122.408103),
    new google.maps.LatLng(37.769132, -122.407276),
    new google.maps.LatLng(37.768564, -122.406469),
    new google.maps.LatLng(37.767980, -122.405745),
    new google.maps.LatLng(37.767380, -122.405299),
    new google.maps.LatLng(37.766604, -122.405297),
    new google.maps.LatLng(37.765838, -122.405200),
    new google.maps.LatLng(37.765139, -122.405139),
    new google.maps.LatLng(37.764457, -122.405094),
    new google.maps.LatLng(37.763716, -122.405142),
    new google.maps.LatLng(37.762932, -122.405398),
    new google.maps.LatLng(37.762126, -122.405813),
    new google.maps.LatLng(37.761344, -122.406215),
    new google.maps.LatLng(37.760556, -122.406495),
    new google.maps.LatLng(37.759732, -122.406484),
    new google.maps.LatLng(37.758910, -122.406228),
    new google.maps.LatLng(37.758182, -122.405695),
    new google.maps.LatLng(37.757676, -122.405118),
    new google.maps.LatLng(37.757039, -122.404346),
    new google.maps.LatLng(37.756335, -122.403719),
    new google.maps.LatLng(37.755503, -122.403406),
    new google.maps.LatLng(37.754665, -122.403242),
    new google.maps.LatLng(37.753837, -122.403172),
    new google.maps.LatLng(37.752986, -122.403112),
    new google.maps.LatLng(37.751266, -122.403355),
    new google.maps.LatLng(22.36120424637, 114.18038853758),
    new google.maps.LatLng(22.30963863617, 114.13576178974),
    new google.maps.LatLng(22.37627503091, 114.10412667388),
    new google.maps.LatLng(22.37867900139, 114.11865948084),
    new google.maps.LatLng(22.38121969037, 114.10999325491),
    new google.maps.LatLng(22.37649639256, 114.14948557474),
    new google.maps.LatLng(22.34944232249, 114.13103943065),
    new google.maps.LatLng(22.34733876635, 114.14134219331),
    new google.maps.LatLng(22.31531098502, 114.18908118960),
    new google.maps.LatLng(22.33948784118, 114.18704365709)
  ]

  var mapOptions = {
    center: new google.maps.LatLng(22.3000, 114.1667),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);

  var pointArray = new google.maps.MVCArray(dummyData);

  var heatmap = new google.maps.visualization.HeatmapLayer({
  data: pointArray
  });

  heatmap.setMap(map);
}

function toggleHeatmap() {
  heatmap.setMap(heatmap.getMap() ? null : map);
}

function changeGradient() {
  var gradient = [
    'rgba(0, 255, 255, 0)',
    'rgba(0, 255, 255, 1)',
    'rgba(0, 191, 255, 1)',
    'rgba(0, 127, 255, 1)',
    'rgba(0, 63, 255, 1)',
    'rgba(0, 0, 255, 1)',
    'rgba(0, 0, 223, 1)',
    'rgba(0, 0, 191, 1)',
    'rgba(0, 0, 159, 1)',
    'rgba(0, 0, 127, 1)',
    'rgba(63, 0, 91, 1)',
    'rgba(127, 0, 63, 1)',
    'rgba(191, 0, 31, 1)',
    'rgba(255, 0, 0, 1)'
  ]
  heatmap.setOptions({
    gradient: heatmap.get('gradient') ? null : gradient
  });
}

function changeRadius() {
  heatmap.setOptions({radius: heatmap.get('radius') ? null : 20});
}

function changeOpacity() {
  heatmap.setOptions({opacity: heatmap.get('opacity') ? null : 0.2});
}

google.maps.event.addDomListener(window, 'load', initialize);