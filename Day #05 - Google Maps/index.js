function initialize() {
   const mapOptions = {
      zoom: 8,
      //Kyiv
      center: new google.maps.LatLng( 50.036616, 30.35460 ),
      // Type of map (ROADMAP, SATELLITE, HYBRID, TERRAIN)
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      minZoom: 2
   };

   const map = new google.maps.Map( document.getElementById( 'map' ), mapOptions );

   const infoWindow = new google.maps.InfoWindow();

   const marker = new google.maps.Marker( {
      position: new google.maps.LatLng( 50.26393, 28.67994 ),
      map: map,
      title: 'Спортивний клуб Вікторія'
   } );

   marker.addListener( 'click', function () {
      infoWindow.setContent( marker.title );
      infoWindow.open( map, marker );
   } );

   google.maps.event.addDomListener( window, "resize", function () {
      map.setCenter( mapOptions.center );
   } );


}

google.maps.event.addDomListener( window, 'load', initialize );