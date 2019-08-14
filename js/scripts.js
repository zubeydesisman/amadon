$(document).ready(function() {
  $("#userInfo").submit(function(event) {
    var firstName = $("input#firstName").val();
    var lastName = $("input#lastName").val();
    var userAddress = $("input#userAddress").val();

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".userAddress").text(userAddress);
    $("#receipt").show();
    event.preventDefault();
  });
});
