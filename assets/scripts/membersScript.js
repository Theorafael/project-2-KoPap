// off-canvas side nav with opacity
const cards = document.querySelectorAll(".card");
cards.forEach(card => {
  card.dataset.originalColor = "white";
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("membersMain").style.marginLeft = "250px";
  let allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    card.style.backgroundColor = "rgba(0,0,0,0.7)";
  });
  document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("membersMain").style.marginLeft= "0";
  let allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    card.style.backgroundColor = card.dataset.originalColor;
  });
  document.body.style.backgroundColor = "white";
}
