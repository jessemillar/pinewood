var users = ["janice", "jesse", "mark", "jeremy", "matthew", "joe", "mike", "dan"]; // A list of fake users for testing and simulation
var emoji = ["😬", "👍", "😃", "😄", "😅", "🙂", "🙃", "😛", "😎"]; // The allowed emoji for chatting

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

// Simulate chatting users
var messageChance = 0.25;

setInterval(function() {
  if (Math.random() <= messageChance) {
    postMessage(users[Math.round(Math.random() * (users.length - 1))], emoji[Math.round(Math.random() * (emoji.length - 1))]);
  }
}, 1000);

var chatModal = function() {
  var modalContent = "<table class='emoji-table'>";

  for (var i = 0; i < 3; i++) {
    modalContent += "<tr>";
    for (var j = 0; j < 3; j++) {
      var emojiID = i * 3 + j;
      modalContent += "<td class='emoji' onclick='selectEmoji(" + emojiID + ")'>" + emoji[emojiID] + "</td>";
    }
  }

  modalContent += "</table>";

  swal({
    title: "",
    text: modalContent,
    html: true,
    showConfirmButton: false
  });
};

var selectEmoji = function(emojiID) {
  swal.close();
  postMessage("testuser", emoji[emojiID]);
};

var postMessage = function(user, message) {
  var ul = document.getElementById("chat-bubbles");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.setAttribute("class", "badge");
  span.textContent = user;
  li.appendChild(span);
  li.appendChild(document.createTextNode(message));
  li.setAttribute("class", "list-group-item chat-bubble");
  ul.appendChild(li);
};
