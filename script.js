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
function notready() { 
  var checkbox = document.getElementById("notready");
  alert("In order to purchase wigs and bundles, all orders must be made through e-mail");
  return; 
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function currentDiv(n) {
  showDivs((slideIndex = n));
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " w3-white";
}
