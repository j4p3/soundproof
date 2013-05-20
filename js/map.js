//  global variables
var pointArray, heatmap;
var siteData = [];

function initialize() {

  $(function(){
    $.get('../python/data_full.json', function(data) {
      //  get the data.json from server
      for (var i = 0; i < data.length; i++) { 
        if (data[i].lat != -1 || data[i].lng != -1) {
          siteData.push(new google.maps.LatLng(data[i].lat, data[i].lng));
        }
      }

      //  assign map styles
      var styles = [ 
        {
          featureType: 'water',
          elementType: 'all',
          stylers: [ { hue: '#DCDED4' }, { saturation: -71 }, { lightness: 38 }, { visibility: 'on' } ]
        },
        { 
          featureType: 'landscape',
          elementType: 'all',
          stylers: [ { hue: '#504B3F' }, { saturation: -56 }, { lightness: -68 }, { visibility: 'on' } ]
        },
        {
          featureType: 'landscape.man_made',
          elementType: 'all',
          stylers: [ { hue: '#AE899A' }, { saturation: -31 }, { lightness: -31 }, { visibility: 'off' } ]
        },
        { 
          featureType: 'landscape.natural',
          elementType: 'labels',
          stylers: [ { hue: '#B0B0B0' }, { saturation: -100 }, { lightness: -27 }, { visibility: 'on' } ]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [ { hue: '#394574' }, { saturation: -66 }, { lightness: -47 }, { visibility: 'on' } ]
        },
        {
          featureType: 'road',
          elementType: 'labels',
          stylers: [ { hue: '#868686' }, { saturation: -100 }, { lightness: -18 }, { visibility: 'on' } ]
        },
        {
          featureType: 'road.local',
          elementType: 'geometry',
          stylers: [ { hue: '#A0B0C7' }, { saturation: -74 }, { lightness: -30 }, { visibility: 'simplified' } ]
        },
        {
          featureType: 'road.local',
          elementType: 'labels',
          stylers: [ { hue: '#69788E' }, { saturation: -85 }, { lightness: -52 }, { visibility: 'on' } ]
        },
        {
          featureType: 'poi.park',
          elementType: 'all',
          stylers: [ { hue: '#506243' }, { saturation: -56 }, { lightness: -59 }, { visibility: 'on' } ]
        }
      ];

      //  set map initial setup and associate it with styles
      var mapOptions = {
        center: new google.maps.LatLng(22.3000, 114.1667),
        zoom: 12,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
      };

      var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

      //  assign map code to DOM element
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

      map.mapTypes.set('map_style', styledMap);
      map.setMapTypeId('map_style');

      pointArray = new google.maps.MVCArray(siteData);

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray,
        radius: 10,
        maxIntensity: 5
      });

      //  hide the loading gif before just showing the map
      $('#loading').hide()

      //  show the heatmap
      heatmap.setMap(map);

    });
  });
}

google.maps.event.addDomListener(window, 'load', initialize);