let news = document.getElementById("myNewsBtn");
news.addEventListener("click", function() {
    document.getElementById("mySide").style.color = "red";
    document.getElementById("mySide").style.width = "100%";
    document.getElementById("myMain").style.display = "none";
    console.log(news);
})
