$("#hamburger").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

var shareSocial = function() {
    swal({
        title: "Share on social media?",
        text: "<img class='social-icon' onclick=shareOn('Facebook') src='/pinewood/images/facebook.svg'><img class='social-icon' onclick=shareOn('Twitter') src='/pinewood/images/twitter.svg'><img class='social-icon' onclick=shareOn('Instagram') src='/pinewood/images/instagram.svg'>",
        confirmButtonText: "Cancel",
        confirmButtonColor: "#c0c0c0",
        html: true
    });
};

var shareOn = function(network) {
    swal("Success!", "Shared on " + network + "!", "success");
};
