searchToggle = document.querySelector(".searchToggle"),

  searchToggle.addEventListener("click", () => {
    searchToggle.classList.toggle("active")
  })
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

i = 0;
$(document).ready(function () {
  $(".form-control").keypress(function () {
    $("span").text(i += 1);
  })
})
$(".home").click(function () {
  audio = new Audio("audio1/button.mp3");
  audio.play();
})
$(".heading").click(function () {
  audio = new Audio("audio1/button.mp3");
  audio.play();
})
$(".heading").mouseover(function () {
  $(".heading").animate({
    fontSize: '5.5vw'
  })
})
$(".heading").mouseout(function () {
  $(".heading").animate({
    fontSize: '5vw'
  })
})

