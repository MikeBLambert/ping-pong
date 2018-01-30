//Business logic
function pingPong(a) {
  var number = parseInt(a);
  var array = [];
  for (var i=0; i<number; i+=1) {
    var numberToPush = number - (number - i - 1);
    if (numberToPush % 3 === 0) {
      array.push("Ping")
    } else if (numberToPush % 5 === 0) {
      array.push("Pong")
    } else {
      array.push(numberToPush)
    };
  };
  console.log(array);
};
// function pingPong(a) {
//   var number = parseInt(a);
//   var array = [];
//   var arrayPingPong = [];
//   for (var i=0;i<number;i+=1) {
//
//     array.push(number-(number-i-1));
//   };
//   for (var i=0;i<number;i+=1) {
//     if (array[i] % 3 === 0) {
//       arrayPingPong.push("Ping")
//     } else if (array[i] % 5 === 0) {
//       arrayPingPong.push("Pong")
//     } else {
//       arrayPingPong.push(array[i])
//     };
//   };


  // array.forEach(function(array) {
  //   if (array % 3 === 0) {
  //     return "Ping"
  //   } else if (array[i] % 5 === 0) {
  //     return "Pong"
  //   } else {
  //     return array
  //   };
  // });

  // console.log(array);
  // console.log(arrayPingPong);
// };
//User Interface logic
$(document).ready(function() {
  $("#submit").submit(function(event) {
  event.preventDefault();
    var input = $("#enterNumber").val();
    var output = pingPong(input);
    $("span#displayPingPong").html(output);
  });
});
