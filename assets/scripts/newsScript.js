// Navbar off-canvas with Opacity
function openNav() {
    document.getElementById("myTopnav").style.width = "250px";
    document.getElementById("newsMain").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeNav() {
    document.getElementById("myTopnav").style.width = "0";
    document.getElementById("newsMain").style.width = "0";
    document.getElementsByClassName("bgimg").style.position = "relative";
    document.body.style.backgroundColor = "white";
}

function myFunction() {
    let nav = document.getElementById("myTopnav");
    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
}

// Countdown date @ <div id="myCountdown"></div>
let countDownDate = new Date("Jan 5, 2025 00:00:00").getTime();

let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("myCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("myCountdown").innerHTML = "EXECUTION";
    }
}, 1000);
