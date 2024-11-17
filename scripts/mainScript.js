let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollpos = window.pageYOffset;
    if (prevScrollpos > currentScrollpos) {
        document.getElementById("myTopnav").style.top = "0";
    } else {
        document.getElementById("myTopnav").style.top = "-50px";
    }
    prevScrollpos = currentScrollpos;
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }