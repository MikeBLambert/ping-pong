//Business logic
function pingPong(a) {
  var number = parseInt(a);
  var pingPongArray = [];
  for (var i=1; i<=number; i+=1) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
      pingPongArray.push(" " + "Ping-Pong")
    } else if (i % 3 === 0) {
      pingPongArray.push(" " + "Ping")
    } else if (i % 5 === 0) {
      pingPongArray.push(" " + "Pong")
    } else {
      pingPongArray.push(" " + i)
    };
  };
  return pingPongArray.toString();
};

//User Interface Logic
$(document).ready(function() {
  $("#submit").submit(function(event) {
  event.preventDefault();
    var input = $("#enterNumber").val();
    var output = pingPong(input);
    $("span#displayPingPong").show();
    $("span#displayPingPong").html(output);
  });
});
