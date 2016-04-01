var checkLogin = function() {
  if (document.getElementById("username").value.length > 0 && document.getElementById("password").value.length > 0) {
    window.location.href = "/pinewood/pages/register";
  } else {
    sweetAlert("Oops...", "Please enter all information!", "error");
  }
};
