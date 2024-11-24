function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("responsive-container-block bigContainer").style.width = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("responsive-container-block bigContainer").style.width = "0";
    document.body.style.backgroundColor = "white";
}