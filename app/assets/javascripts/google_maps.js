var geocoder;
var map;
function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(50.450100, 30.523400);
    var mapOptions = {
        zoom: 8,
        center: latlng
    }

    // for geocode
    //var map = new google.maps.Map(document.getElementById('map-canvas'),
    //    mapOptions);
    // without geocode
    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);

    setMarkers(map, beaches);
}

/**
 * https://developers.google.com/maps/documentation/javascript/examples/icon-complex
 * http://www.latlong.net/convert-address-to-lat-long.html
 * https://developers.google.com/maps/documentation/javascript/examples/event-simple
 * https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple
 *
 * Data for the markers consisting of a name, a LatLng and a zIndex for
 * the order in which these markers should display on top of each
 * other.
 */
var beaches = [
    ['м. Київ, вул. Академіка Булаховського 5Б', 50.469996, 30.338976, 4],
    ['м. Київ, вул. Фрунзе 109В/1', 50.392798, 30.699146, 5],
    ['м. Київ, вул. Братиславська 14А', 50.467360, 30.627904, 3],
    ['м. Київ, вул. Декабристів 3', 50.406378 , 30.656502, 2],
    ['м. Боярка, вул. Білогородська 43', 50.327827, 30.292287, 1],
    ['м. Васильків, вул. Володимирська 13', 50.174333, 30.320791, 6],
    ['м. Фастів, вул. Соборна 47', 50.079300, 29.912633, 7],
    ['м. Біла Церква, вул. Леваневського 32', 49.785185, 30.152080, 8],
    ['м. Буча, вул. Енергетиків 14А', 50.550136, 30.208964, 9]
];

function setMarkers(map, locations) {
    // Add markers to the map

    // Marker sizes are expressed as a Size of X,Y
    // where the origin of the image (0,0) is located
    // in the top left of the image.

    // Origins, anchor positions and coordinates of the marker
    // increase in the X direction to the right and in
    // the Y direction down.
    var image = {
        url: '/assets/bullet.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(28, 29),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon.
    // The type defines an HTML &lt;area&gt; element 'poly' which
    // traces out a polygon as a series of X,Y points. The final
    // coordinate closes the poly by connecting to the first
    // coordinate.
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18 , 1],
        type: 'poly'
    };
    // infowindow - for all marker
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    // infowindow - for all marker

    for (var i = 0; i < locations.length; i++) {
        var beach = locations[i];
        var myLatLng = new google.maps.LatLng(beach[1], beach[2]);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
        // center to marker if click
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                map.setZoom(14);
                map.setCenter(marker.getPosition());
            }
        })(marker, i));
        // center to marker if click
    }
}


function codeAddress(element_address) {
    var address = document.getElementById(element_address).value;
    var image = {
        url: '/assets/bullet.png',
        // This marker is 20 pixels wide by 32 pixels tall.
        size: new google.maps.Size(28, 29),
        // The origin for this image is 0,0.
        origin: new google.maps.Point(0,0),
        // The anchor for this image is the base of the flagpole at 0,32.
        anchor: new google.maps.Point(0, 32)
    };
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
            map.setZoom(14);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                icon: image
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);


google.maps.event.addDomListener(window, 'load', initialize);


