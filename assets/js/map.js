function initMap() {
    // Specify latitude and longitude for the position you want to show
    var myLatLng = { lat: -30.19938278198242, lng: 149.10801696777344 };

    // Create a new map instance
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 14 // Adjust the zoom level as needed
    });

    // Add a marker at the specified position
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'My Location' // Optional: Add a title to the marker
    });
}