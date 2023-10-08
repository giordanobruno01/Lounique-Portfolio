$(document).ready(function () {
  $("#left1").click(function () {
    $("#opt2").hide();
    $("#opt3").hide();
    $("#opt1").toggle();
  });
});
$(document).ready(function () {
  $("#left2").click(function () {
    $("#opt1").hide();
    $("#opt3").hide();
    $("#opt2").toggle();
  });
});
$(document).ready(function () {
  $("#left3").click(function () {
    $("#opt1").hide();
    $("#opt2").hide();
    $("#opt3").toggle();
  });
});

// function showlist1() {

//   document.getElementById("galleryright").innerHTML = `
// <div class="columns colsmall">
//   <ul class="price" >
//     <li class="header">KNOTLESS / BRAIDS</li>

//     <li><h3>Short Length</h3> <div class="adults-kids"> Adults €85.00</div> <div class="adults-kids"> Kids €45.00</div></li>
//     <li><h3>Medium Length</h3> <div class="adults-kids"> Adults €105.00</div> <div class="adults-kids"> Kids €45.00</div> </li>
//     <li><h3>Long Lenth</h3> <div class="adults-kids"> Adults €125.00</div> <div class="adults-kids"> Kids €55.00</div></li>

//     <li class="grey"><a href="#" class="button">Schedule here</a></li>
//   </ul>
// </div>

// <div class="columns colsmall ">
//   <ul class="price">
//     <li class="header" style="background-image: url(images/900px/3.jpeg);" >TWIST BRAIDS</li>

//     <li><h3>Short Length</h3> <div class="adults-kids"> Adults €75.00</div> <div class="adults-kids"> Kids €45.00</div></li>
//     <li><h3>Medium Length</h3> <div class="adults-kids"> Adults €85.00</div> <div class="adults-kids"> Kids €45.00</div> </li>
//     <li><h3>Long Lenth</h3> <div class="adults-kids"> Adults €90.00</div> <div class="adults-kids"> Kids €55.00</div></li>

//     <li class="grey"><a href="https://www.fresha.com/a/louniquehair-dublin-oconnell-street-upper-y3gzfoww/booking?dppub=true&menu=true" target="_blank" class="button" >Schedule here</a></li>
//   </ul>
// </div>

// <div class="columns colsmall">
//   <ul class="price">
//     <li class="header">FAUX LOCS <img src="images/services/Faux locs.JPG" alt=""></li>

//     <li><h3>Short Length</h3> <div class="adults-kids"> Adults €100.00</div> <div class="adults-kids"> Kids €45.00</div></li>
//     <li><h3>Medium Length</h3> <div class="adults-kids"> Adults €85.00</div> <div class="adults-kids"> Kids €45.00</div> </li>
//     <li><h3>Long Lenth</h3> <div class="adults-kids"> Adults €90.00</div> <div class="adults-kids"> Kids €55.00</div></li>

//     <li class="grey"><a href="#" class="button">Schedule here</a></li>
//   </ul>
// </div>
//  `;
// }

// function showlist2() {
//   document.getElementById("galleryright").innerHTML = `
//   <div class="columns2 ">
//   <ul class="price">
//     <li class="header">BONE STRAIGHT </li>

//     <li> <div class="lenght"> 8"</div>
//     <div class="lenght-price"> €250.00</div></li>
//     <li> <div class="lenght"> 10"</div>
//     <div class="lenght-price"> €280.00</div></li>
//     <li> <div class="lenght"> 12"</div>
//     <div class="lenght-price"> €300.00</div></li>
//     <li> <div class="lenght"> 14"</div>
//     <div class="lenght-price"> €330.00</div></li>
//     <li> <div class="lenght"> 16"</div>
//     <div class="lenght-price"> €350.00</div></li>
//     <li> <div class="lenght"> 18"</div>
//     <div class="lenght-price"> €370.00</div></li>
//     <li> <div class="lenght"> 20"</div>
//     <div class="lenght-price"> €390.00</div></li>
//     <li> <div class="lenght"> 22"</div>
//     <div class="lenght-price"> €420.00</div></li>
//     <li> <div class="lenght"> 24"</div>
//     <div class="lenght-price"> €470.00</div></li>
//     <li> <div class="lenght"> 26"</div>
//     <div class="lenght-price"> €530.00</div></li>
//     <li> <div class="lenght"> 28"</div>
//     <div class="lenght-price"> €590.00</div></li>
//     <li> <div class="lenght"> 30"</div>
//     <div class="lenght-price"> €650.00</div></li>
//     <li> <div class="lenght"> 32"</div>
//     <div class="lenght-price"> €700.00</div></li>
//     <li> <div class="lenght"> 34"</div>
//     <div class="lenght-price"> €770.00</div></li>
//     <li> <div class="lenght"> 36"</div>
//     <div class="lenght-price"> €800.00</div></li>

//     <li class="grey"><a href="#" class="button">Buy Here</a></li>
//   </ul>
// </div>

// <div class="columns2">
//   <ul class="price">
//     <li class="header" >BODY WAVE</li>
//     <li> <div class="lenght"> 8"</div>
//     <div class="lenght-price"> €250.00</div></li>
//     <li> <div class="lenght"> 10"</div>
//     <div class="lenght-price"> €280.00</div></li>
//     <li> <div class="lenght"> 12"</div>
//     <div class="lenght-price"> €300.00</div></li>
//     <li> <div class="lenght"> 14"</div>
//     <div class="lenght-price"> €330.00</div></li>
//     <li> <div class="lenght"> 16"</div>
//     <div class="lenght-price"> €350.00</div></li>
//     <li> <div class="lenght"> 18"</div>
//     <div class="lenght-price"> €370.00</div></li>
//     <li> <div class="lenght"> 20"</div>
//     <div class="lenght-price"> €390.00</div></li>
//     <li> <div class="lenght"> 22"</div>
//     <div class="lenght-price"> €420.00</div></li>
//     <li> <div class="lenght"> 24"</div>
//     <div class="lenght-price"> €470.00</div></li>
//     <li> <div class="lenght"> 26"</div>
//     <div class="lenght-price"> €530.00</div></li>
//     <li> <div class="lenght"> 28"</div>
//     <div class="lenght-price"> €590.00</div></li>
//     <li> <div class="lenght"> 30"</div>
//     <div class="lenght-price"> €650.00</div></li>
//     <li> <div class="lenght"> 32"</div>
//     <div class="lenght-price"> €700.00</div></li>
//     <li> <div class="lenght"> 34"</div>
//     <div class="lenght-price"> €770.00</div></li>
//     <li> <div class="lenght"> 36"</div>
//     <div class="lenght-price"> €800.00</div></li>

//     <li class="grey"><a href="#" class="button">Buy Here</a></li>
//   </ul>
// </div>

// <div class="columns2">
//   <ul class="price">
//     <li class="header" style="background-image: url(images/wig.jpeg);">DEEP CURLS</li>

//     <li> <div class="lenght"> 8"</div>
//     <div class="lenght-price"> €250.00</div></li>
//     <li> <div class="lenght"> 10"</div>
//     <div class="lenght-price"> €280.00</div></li>
//     <li> <div class="lenght"> 12"</div>
//     <div class="lenght-price"> €300.00</div></li>
//     <li> <div class="lenght"> 14"</div>
//     <div class="lenght-price"> €330.00</div></li>
//     <li> <div class="lenght"> 16"</div>
//     <div class="lenght-price"> €350.00</div></li>
//     <li> <div class="lenght"> 18"</div>
//     <div class="lenght-price"> €370.00</div></li>
//     <li> <div class="lenght"> 20"</div>
//     <div class="lenght-price"> €390.00</div></li>
//     <li> <div class="lenght"> 22"</div>
//     <div class="lenght-price"> €420.00</div></li>
//     <li> <div class="lenght"> 24"</div>
//     <div class="lenght-price"> €470.00</div></li>
//     <li> <div class="lenght"> 26"</div>
//     <div class="lenght-price"> €530.00</div></li>
//     <li> <div class="lenght"> 28"</div>
//     <div class="lenght-price"> €590.00</div></li>
//     <li> <div class="lenght"> 30"</div>
//     <div class="lenght-price"> €650.00</div></li>
//     <li> <div class="lenght"> 32"</div>
//     <div class="lenght-price"> €700.00</div></li>
//     <li> <div class="lenght"> 34"</div>
//     <div class="lenght-price"> €770.00</div></li>
//     <li> <div class="lenght"> 36"</div>
//     <div class="lenght-price"> €800.00</div></li>

//     <li class="grey"><a href="#" class="button">Buy Here</a></li>
//   </ul>
// </div>
// <div class="columns2">
//   <ul class="price">
//     <li class="header" style="background-image: url(images/wig.jpeg);">KINKY CURLS</li>

//   <li> <div class="lenght"> 8"</div>
//     <div class="lenght-price"> €250.00</div></li>
//     <li> <div class="lenght"> 10"</div>
//     <div class="lenght-price"> €280.00</div></li>
//     <li> <div class="lenght"> 12"</div>
//     <div class="lenght-price"> €300.00</div></li>
//     <li> <div class="lenght"> 14"</div>
//     <div class="lenght-price"> €330.00</div></li>
//     <li> <div class="lenght"> 16"</div>
//     <div class="lenght-price"> €350.00</div></li>
//     <li> <div class="lenght"> 18"</div>
//     <div class="lenght-price"> €370.00</div></li>
//     <li> <div class="lenght"> 20"</div>
//     <div class="lenght-price"> €390.00</div></li>
//     <li> <div class="lenght"> 22"</div>
//     <div class="lenght-price"> €420.00</div></li>
//     <li> <div class="lenght"> 24"</div>
//     <div class="lenght-price"> €470.00</div></li>
//     <li> <div class="lenght"> 26"</div>
//     <div class="lenght-price"> €530.00</div></li>
//     <li> <div class="lenght"> 28"</div>
//     <div class="lenght-price"> €590.00</div></li>
//     <li> <div class="lenght"> 30"</div>
//     <div class="lenght-price"> €650.00</div></li>
//     <li> <div class="lenght"> 32"</div>
//     <div class="lenght-price"> €700.00</div></li>
//     <li> <div class="lenght"> 34"</div>
//     <div class="lenght-price"> €770.00</div></li>
//     <li> <div class="lenght"> 36"</div>
//     <div class="lenght-price"> €800.00</div></li>

//     <li class="grey"><a href="#" class="button">Buy Here</a></li>
//   </ul>
// </div>
//           `;
// }

// function showlist3() {
//   document.getElementById("galleryright").innerHTML = `
//     <div class="columns3">
//   <ul class="price men">
//     <li class="header">MEN <img src="images/services/travis.jpeg" alt="Travis Braids"></li>

//     <li><h3>Travis Braids</h3> <div class="adults-kids"> Adults €45.00</div> <div class="adults-kids"> Kids €35.00</div></li>
//     <li><h3>Corn Rows</h3> <div class="adults-kids"> Adults €40.00</div> <div class="adults-kids"> Kids €30.00</div> </li>

//     <li class="grey"><a href="#" class="button">Schedule here</a></li>
//   </ul>
// </div>
// <div class="columns3">
//   <ul class="price">
//     <li class="header" style="background-image: url(images/900px/3.jpeg);" >OTHERS </li>

//     <li><h4>Cornrows underneath wig</h4> <div class="adults-kids"> €15.00</div></li>
//     <li><h4>Wig revamps</h4> <div class="adults-kids"> €100.00</div> </li>
//     <li><h4>Installaton /Weave in</h4> <div class="adults-kids">€100.00</div> </li>
//     <li><h4>Melt band for edges</h4> <div class="adults-kids"> €10.00</div> </li>
//     <li><h4>Braids take down</h4> <div class="adults-kids">  €40.00</div> </li>

//     <li class="grey"><a href="#" class="button">Schedule here</a></li>
//   </ul>
// </div>
//           `;
// }
