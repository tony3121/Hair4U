

  $(".firstQ").on("click", function() {
    $(".numOne").addClass("hideQ");
    $(".numTwo").addClass("showQ");
  })
  $(".secQ").on("click", function() {
    $(".numTwo").removeClass("showQ");
    $(".numThree").addClass("showQ");
  })
  $(".thirdQ").on("click", function() {
    $(".numThree").removeClass("showQ");
    $(".numFour").addClass("showQ");
  })
  $(".fourthQ").on("click", function() {
    $(".numFour").removeClass("showQ");
    $("#submitBtn").removeClass("hideQ");
  })
