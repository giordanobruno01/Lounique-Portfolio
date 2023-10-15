$(document).ready(function () {
  $("#left1").click(function () {
    $("#opt0").hide();
    $("#opt2").hide();
    $("#opt3").hide();
    $("#opt1").toggle(); 
  });
});

$(document).ready(function () {
  $("#left2").click(function () {
    $("#opt0").hide();
    $("#opt1").hide();
    $("#opt3").hide();
    $("#opt2").toggle();
  });
});
$(document).ready(function () {
  $("#left3").click(function () {
    $("#opt0").hide();
    $("#opt1").hide();
    $("#opt2").hide();
    $("#opt3").toggle();
  });
});

// $(document).ready(function () {
//   $(".site-mobile-menu-body").click(function () {
//     console.log("hi");
//     $(".site-mobile-menu").show();
//     // $(".icon-close2").hide();
//   });
// });

