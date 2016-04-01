var checkRegister = function() {
  if (document.getElementById("username").value.length > 0 && document.getElementById("password").value.length > 0) {
    window.location.href = "/pinewood/pages/standings";
  } else {
    sweetAlert("Oops...", "Please enter all information!", "error");
  }
};
