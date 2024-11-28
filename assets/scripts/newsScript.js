// Navbar off-canvas with Opacity
function openNav() {
    document.getElementById("myTopnav").style.width = "250px";
    document.getElementById("newsMain").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.7)";
}

function closeNav() {
    document.getElementById("myTopnav").style.width = "0";
    document.getElementById("newsMain").style.width = "0";
    document.body.style.backgroundColor = "white";
}



// Countdown date
let countDownDate = new Date("Jan 5, 2025 00:00:00").getTime(); // Target date

let x = setInterval(() => {
    let now = new Date().getTime(); // Get current time
    let distance = countDownDate - now;

    // Time calculations days, hours, minutes, seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Countdown
    document.getElementById("myCountdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the Countdown is over, show message
    if(distance < 0) {
        clearInterval(x);
        document.getElementById("myCountdown").innerHTML = "D-DAY";
    }
}, 1000);
