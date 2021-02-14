function initMap() {
  const hotPizza = { lat: 51.505749609938576, lng: -0.11510476562161634 };
  const map = new google.maps.Map(document.getElementsByClassName("map")[0], {
    zoom: 15,
    center: hotPizza,
    mapTypeControl: false,
    streetViewControl: false,
    styles: [
      { "elementType": "geometry", "stylers": [{ "color": "#212121"}]},
      { "elementType": "labels.icon", "stylers": [{ "visibility": "off"}]},
      { "elementType": "labels.text.fill", "stylers": [{ "color": "#757575"}]},
      { "elementType": "labels.text.stroke", "stylers": [{ "color": "#212121"}]},
      {
        "featureType": "administrative", 
        "elementType": "geometry", 
        "stylers": [{ "color": "#757575"}]
      },
      {
        "featureType": "administrative.country", 
        "elementType": "labels.text.fill", 
        "stylers": [{ "color": "#9e9e9e"}]
      },
      {
        "featureType": "administrative.land_parcel", 
        "stylers": [{ "visibility": "off"}]
      },
      {
        "featureType": "administrative.locality", 
        "elementType": "labels.text.fill", 
        "stylers": [{ "color": "#bdbdbd"}]
      },
      {
        "featureType": "poi", 
        "elementType": "geometry.fill", 
        "stylers": [{ "color": "#713524"}]
      },
      {
        "featureType": "poi", 
        "elementType": "labels.icon", 
        "stylers": [{ "visibility": "on"}]
      },
      {
        "featureType": "poi.park", 
        "elementType": "geometry", 
        "stylers": [{ "color": "#181818"}]
      },
      {
        "featureType": "poi.park", 
        "elementType": "geometry.fill", 
        "stylers": [{ "color": "#713524"}]
      },
      {
        "featureType": "road", 
        "elementType": "geometry.fill", 
        "stylers": [{ "color": "#2c2c2c"}]
      },
      {
        "featureType": "road", 
        "elementType": "labels.text.fill", 
        "stylers": [{ "color": "#8a8a8a"}]
      },
      {
        "featureType": "road.arterial", 
        "elementType": "geometry", 
        "stylers": [{ "color": "#373737"}]
      },
      {
        "featureType": "road.arterial", 
        "elementType": "geometry.fill", 
        "stylers": [{ "color": "#b13816"}]
      },
      {
        "featureType": "road.highway", 
        "elementType": "geometry", 
        "stylers": [{ "color": "#3c3c3c"}]
      },
      {
        "featureType": "road.highway", 
        "elementType": "geometry.fill", 
        "stylers": [{ "color": "#b13816"}]
      },
      {
        "featureType": "transit", 
        "elementType": "labels.text.fill", 
        "stylers": [{ "color": "#757575"}]
      },
      {
        "featureType": "water", 
        "elementType": "geometry", 
        "stylers": [{ "color": "#000000"}]
      },
      {
        "featureType": "water", 
        "elementType": "labels.text.fill", 
        "stylers": [{ "color": "#3d3d3d"}]
       }
    ]
  });
  const contentString =
    '<div class="info-window text-align--center">' +
      '<h3 class="brand-name">HOTPIZZA</h3>' +
      '<p class="info-window-content">Unit 3, The White House<br/>9c Belvedere Road, South Bank<br/>London SE1 8YP</p>' +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: "250px"
  });
  const marker = new google.maps.Marker({
    position: hotPizza,
    map: map,
    title: "Pizzeria HotPizza",
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  infowindow.open(map, marker);
}
