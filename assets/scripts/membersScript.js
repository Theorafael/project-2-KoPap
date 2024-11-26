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
  let allImg = document.querySelectorAll("img");
  allImg.forEach(img => {
    img.style.opacity = "0.1";
  });
  let allTitles = document.querySelectorAll(".title");
  allTitles.forEach(title => {
    title.style.opacity = "0";
  });
  let allContact = document.querySelectorAll("button");
  allContact.forEach(contact => {
    contact.style.opacity = "0.1"
  })
  document.body.style.backgroundColor = "rgba(0,0,0,0.9)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("membersMain").style.marginLeft= "0";
  let allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    card.style.backgroundColor = card.dataset.originalColor;
  });
  let allImg = document.querySelectorAll("img");
  allImg.forEach(img => {
    img.style.opacity = "1";
  });
  let allTitles = document.querySelectorAll(".title");
  allTitles.forEach(title => {
    title.style.opacity = "1";
  });
  let allContact = document.querySelectorAll("button");
  allContact.forEach(contact => {
    contact.style.opacity = "1";
  })
  document.body.style.backgroundColor = "white";
}
