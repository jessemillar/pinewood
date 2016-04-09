$(document).ready(function() {
    if (("standalone" in window.navigator) && window.navigator.standalone) {
        // For iOS Apps
        $('a').on('click', function(e) {
            e.preventDefault();
            var new_location = $(this).attr('href');
            if (new_location != undefined && new_location.substr(0, 1) != '#' && $(this).attr('data-method') == undefined) {
                window.location = new_location;
            }
        });
    }
});

$("#hamburger").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

var shareSocial = function(message) {
    if (!message) {
        swal({
            title: "Share on social media?",
            text: "<img class='social-icon' onclick=shareOn('Facebook') src='/pinewood/images/facebook.svg'><img class='social-icon' onclick=shareOn('Twitter') src='/pinewood/images/twitter.svg'><img class='social-icon' onclick=shareOn('Instagram') src='/pinewood/images/instagram.svg'>",
            confirmButtonText: "Cancel",
            confirmButtonColor: "#c0c0c0",
            html: true
        });
    } else {
        swal({
            title: "Share " + message + " on social media?",
            text: "<img class='social-icon' onclick=shareOn('Facebook') src='/pinewood/images/facebook.svg'><img class='social-icon' onclick=shareOn('Twitter') src='/pinewood/images/twitter.svg'><img class='social-icon' onclick=shareOn('Instagram') src='/pinewood/images/instagram.svg'>",
            confirmButtonText: "Cancel",
            confirmButtonColor: "#c0c0c0",
            html: true
        });
    }
};

var shareOn = function(network) {
    swal("Success!", "Shared on " + network + "!", "success");
};

var profile = function(cub) {
    console.log("Opening profile for " + cub)
    window.open("/pinewood/pages/profiles/" + cub, "_self");
};
