animations = ["jump.gif", "photo-finish.gif", "tongue.gif"];

var init = function() {
  document.getElementById("animation").style.backgroundImage = "url('/pinewood/animations/" + animations[Math.floor(Math.random() * animations.length)] + "')";
};
