var ebModal1 = document.getElementById('mark1Modal');
var ebBtn1 = document.getElementById("mark1");
var ebSpan1 = document.getElementsByClassName("ebcf_close1")[0];

ebBtn1.onclick = function() {
    ebModal1.style.display = "block";
}

ebSpan1.onclick = function() {
    ebModal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == ebModal1) {
        ebModal1.style.display = "none";
    }
}

$(document).ready(function () {
  $("#mark2").click(function () {
    $(".ebcf_modal2").css("display", "block");
  });
  
});
$(document).ready(function () {
  $(".ebcf_modal2").click(function () {
    $(".ebcf_modal2").css("display", "none");
  });
});

