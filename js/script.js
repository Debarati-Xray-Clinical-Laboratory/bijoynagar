// Initialize and add the map
function initMap() {
    // The location
    var location = { lat: 25.282, lng: 82.956 }; // Example coordinates for Varanasi
    // The map, centered at location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });
    // The marker, positioned at location
    var marker = new google.maps.Marker({ position: location, map: map });
}
