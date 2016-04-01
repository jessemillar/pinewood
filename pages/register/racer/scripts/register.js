var checkRegister = function() {
  if (document.getElementById("username").value.length > 0 && document.getElementById("password").value.length > 0 && document.getElementById("avatar").value.length > 0 && document.getElementById("team-name").value.length > 0 && document.getElementById("car-picture").value.length > 0) {
    window.location.href = "/pinewood/pages/standings";
  } else {
    sweetAlert("Oops...", "Please enter all information!", "error");
  }
};

var uploadAvatar = function() {
  document.getElementById("avatar").value = "picture.jpg";
};

var uploadCarPicture = function() {
  document.getElementById("car-picture").value = "car.jpg";
};
