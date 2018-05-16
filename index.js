var map,marker;

(function () {
    document.getElementById("btn1").addEventListener("click", function () {
        map.data.loadGeoJson(
          'https://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson');
    });

    document.getElementById("btn2").addEventListener("click", function () {
        /*map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.729234, lng:  -73.996566},
          zoom: 18
        });*/

        marker = new google.maps.Marker({
          position: {lat: 40.729234, lng:  -73.996566},
          label:"University",
          map: map
        });
    });

    document.getElementById("btn3").addEventListener("click", function () {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.729234, lng:  -73.996566},
        zoom: 10
      });
    });
   
})();
