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
