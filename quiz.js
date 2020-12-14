

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

  $(document).ready(function() {
    $('#num2').hide();
  });

  $(document).ready(function() {
    $('#num3').hide();
  });

  $(document).ready(function() {
    $('#num4').hide();
  });

  $(document).ready(function() {
    $('#num5').hide();
  });

  $(document).ready(function() {
    $('#num6').hide();
  });

  $(document).ready(function() {
    $('#num7').hide();
  });

  $(document).ready(function() {
    $('#num8').hide();
  });

  $(document).ready(function() {
    $('#num9').hide();
  });

  $(document).ready(function() {
    $('#num10').hide();
  });

  $(document).ready(function() {
    $('#num11').hide();
  });

  $(document).ready(function() {
    $('#num12').hide();
  });

  $(document).ready(function() {
    $('#num13').hide();
  });

  $(document).ready(function() {
    $('#num14').hide();
  });

  $(document).ready(function() {
    $('#num15').hide();
  });

  $(document).ready(function() {
    $('#num16').hide();
  });

  $(document).ready(function(){
    $('#ans1').on('click', function(){
      $('#num1').hide();
      $('#num2').show();
    })
  })

  $(document).ready(function(){
    $('#ans2').on('click', function(){
      $('#num2').hide();
      $('#num3').show();
    })
  })

  $(document).ready(function(){
    $('#ans3').on('click', function(){
      $('#num3').hide();
      $('#num4').show();
    })
  })

  $(document).ready(function(){
    $('#ans4').on('click', function(){
      $('#num4').hide();
      $('#num5').show();
    })
  })

  $(document).ready(function(){
    $('#ans5').on('click', function(){
      $('#num5').hide();
      $('#num6').show();
    })
  })

  $(document).ready(function(){
    $('#ans6').on('click', function(){
      $('#num6').hide();
      $('#num7').show();
    })
  })

  $(document).ready(function(){
    $('#ans7').on('click', function(){
      $('#num7').hide();
      $('#num8').show();
    })
  })

  $(document).ready(function(){
    $('#ans8').on('click', function(){
      $('#num8').hide();
      $('#num9').show();
    })
  })

  $(document).ready(function(){
    $('#ans9').on('click', function(){
      $('#num9').hide();
      $('#num10').show();
    })
  })

  $(document).ready(function(){
    $('#ans10').on('click', function(){
      $('#num10').hide();
      $('#num11').show();
    })
  })

  $(document).ready(function(){
    $('#ans11').on('click', function(){
      $('#num11').hide();
      $('#num12').show();
    })
  })

  $(document).ready(function(){
    $('#ans12').on('click', function(){
      $('#num12').hide();
      $('#num13').show();
    })
  })

  $(document).ready(function(){
    $('#ans13').on('click', function(){
      $('#num13').hide();
      $('#num14').show();
    })
  })

  $(document).ready(function(){
    $('#ans14').on('click', function(){
      $('#num14').hide();
      $('#num15').show();
    })
  })

  $(document).ready(function(){
    $('#ans15').on('click', function(){
      $('#num15').hide();
      $('#num16').show();
    })
  })

  $(document).ready(function(){
    $('#ans16').on('click', function(){
      $('#num16').hide();
      $('wai').show();
    })
  })


  var i = 0;
  function move() {
    if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 100) {
          clearInterval(id);
          i = 0;
        } else {
          width++;
          elem.style.width = width + "%";
        }
      }
    }
  }
