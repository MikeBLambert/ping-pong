//Business logic
function pingPong(a) {
  var number = parseInt(a);
  var pingPongArray = [];
  for (var i=0; i<number; i+=1) {
    var numberToPush = number - (number - i - 1);
    if ((numberToPush % 3 === 0) && (numberToPush % 5 === 0)) {
      pingPongArray.push(" " + "Ping-Pong")
    } else if (numberToPush % 3 === 0) {
      pingPongArray.push(" " + "Ping")
    } else if (numberToPush % 5 === 0) {
      pingPongArray.push(" " + "Pong")
    } else {
      pingPongArray.push(" " + numberToPush)
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
