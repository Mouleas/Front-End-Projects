var map = L.map('map').setView([0, 0], 0.5);
L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Qo9XSMmBHlghivPCFj6s')
    .addTo(map);

var thanosLocations = [
    [-25.2744,120.7751],
    [-8.7832,20.5085],
    [20.5937,50.9629],
    [61.5240,80.3188],
    [-20.1667,-60.7129],
    [37.0902,-70.7129]
]

var customIcon = L.icon({
    iconUrl: 'assets/images/thanos.jpg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    className: "ThanosMarker"
});
var idx = Math.floor(Math.random() * 6);
L.marker(thanosLocations[idx], { icon: customIcon }).addTo(map);

var msg = "Thanos is going to capture ";
switch (idx) {
    case 0:
        msg += "Soul stone";
        break;
    case 1:
        msg += "Reality stone";
        break;
    case 2:
        msg += "Time stone";
        break;

    case 3:
        msg += "Space stone";
        break;

    case 4:
        msg += "Mind stone";
        break;

    case 5:
        msg += "Power stone";
        break;
    
    default:
        msg += "Power stone";
        break;
}



// Define the locations and custom marker icons for the Infinity Stones
var stoneLocations = [
    { name: 'Soul Stone', lat: -25.2744, lng: 133.7751, icon: 'assets/images/soulStone.gif' }, // Australia
    { name: 'Mind Stone', lat: -8.7832, lng: 34.5085, icon: 'assets/images/realityStone.gif' }, // Africa
    { name: 'Time Stone', lat: 20.5937, lng: 78.9629, icon: 'assets/images/timeStone.gif' }, // India
    { name: 'Space Stone', lat: 61.5240, lng: 105.3188, icon: 'assets/images/spaceStone.gif' }, // Russia
    { name: 'Reality Stone', lat: -20.1667, lng: -70.7129, icon: 'assets/images/mindStone.gif' }, // Greenland
    { name: 'Power Stone', lat: 37.0902, lng: -95.7129, icon: 'assets/images/powerStone.gif' }, // North America
];

// Create markers with custom icons for each Infinity Stone
stoneLocations.forEach(function (stone) {
    var customMarker = L.icon({
        iconUrl: stone.icon,
        iconSize: [40, 40],
        iconAnchor: [20, 40]
    });
    L.marker([stone.lat, stone.lng], { icon: customMarker }).addTo(map);
});



function zoomToMarker() {
    var lat = this.getAttribute('data-lat');
    var lng = this.getAttribute('data-lng');

    if (lat && lng) {
        var latLng = L.latLng(parseFloat(lat), parseFloat(lng));
        map.setView(latLng, 8);
        marker.setLatLng(latLng);
    }
}

function alertBox(){
    setTimeout(() => {
        document.getElementById("alertbox").style.display = "block";
        document.getElementById("msg").innerHTML = msg;
        document.getElementById("map").style.display = "none";
        document.getElementById("backButton").style.display = "none";
        document.getElementById("alertButton").style.display = "none";
    },3000);
    
}