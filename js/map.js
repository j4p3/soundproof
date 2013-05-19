function initialize() {
  var pointArray, heatmap;

  //  assign lat/long data
  var dummyData = [
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
  ];

  //  assign map styles
  var styles = [
    {
      "elementType": "labels",
      "stylers": [
        { "visibility": "off" }
      ]
    },{
      "featureType": "transit",
      "stylers": [
        { "visibility": "off" }
      ]
    }
  ]

  //  set map initial setup and associate it with styles
  var mapOptions = {
    center: new google.maps.LatLng(22.3000, 114.1667),
    zoom: 12,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };

  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  //  assign map code to DOM element
  var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  pointArray = new google.maps.MVCArray(dummyData);

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });

  heatmap.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);