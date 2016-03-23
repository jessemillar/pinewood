$("#hamburger").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

var switchPage = function(page) { // For eventually turning the project into a one-page app
  console.log(page);
};
