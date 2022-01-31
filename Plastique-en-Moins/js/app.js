//Map
var map = L.map('map').setView([-21.33362247853798, 55.479963001126436], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Pin Saint-Pierre
L.marker([-21.33362247853798, 55.479963001126436]).addTo(map)
.bindPopup('Restaurant Chez Michel <br> Saint-Pierre <br> 97410 La Réunion')
.openPopup();

// Pin Saint-Denis
L.marker([-20.89097792228533, 55.42899723707078]).addTo(map)
.bindPopup('Restaurant Le Casse-Croûte <br> Saint-Denis <br> 97400 La Réunion ')
.openPopup();

// Pin Le Port
L.marker([-20.9426190, 55.2961992]).addTo(map)
.bindPopup('Magasin Leclerc <br> Le Port <br> 97420 La Réunion ')
.openPopup();

//Ajouter des lieux 
function getClickedLanLon(e) {

  var lat,
      lon,
      zoom;

  lat = e.latlng.lat;
  lon = e.latlng.lng;
  zoom = map.getZoom();

  marker2 = new L.Marker(new L.LatLng(lat, lon));
    if ( confirm( "Voulez-vous confirmer l'ajout de ce lieu?" ) ) {
        map.addLayer(marker2);
      // Code à éxécuter si le l'utilisateur clique sur "OK"
      alert("Vous avez ajouté ce lieu. Nous procédons à la vérification de celui-ci.");
    }else {
      // Code à éxécuter si l'utilisateur clique sur "Annuler"
      alert("Vous n'avez pas ajouté ce lieu.");
     
  }
}


map.on('click', getClickedLanLon);
//map.addEventListener ("click", function() {
  //if ( confirm( "Voulez-vous confirmer l'ajout de ce lieu?" ) ) {
    // Code à éxécuter si le l'utilisateur clique sur "OK"
    //alert("Vous avez ajouté ce lieu. Nous procédons à la vérification de celui-ci.");
  //}else {
    // Code à éxécuter si l'utilisateur clique sur "Annuler" 
   // alert("Vous n'avez pas ajouté ce lieu.");
   
//}
//});


