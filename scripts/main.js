$("#hamburger").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

var shareSocial = function() {
  swal({
    title: "Are you sure?",
    text: "Do you really want to post these standings to Facebook?",
    type: "warning",
    showCancelButton: true,
    closeOnConfirm: false
  }, function() {
    swal({
      title: "Sweet!",
      text: "Shared on Facebook.",
      imageUrl: "/pinewood/images/thumbs-up.jpg"
    });
  });
};
