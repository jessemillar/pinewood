(function(a, b, c) {
    if (c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function(a) {
            d = a.target;
            while (!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (chref = d.href).replace(e.href, "").indexOf("#") && (!/^[a-z\+\.\-]+:/i.test(chref) || chref.indexOf(e.protocol + "//" + e.host) === 0) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");

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
