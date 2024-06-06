// funzione per contare i viaggi nella pagina e mostra un alert
const countTrips = () => {
  const cards = document.getElementsByClassName("card");
  alert("Scegli Eveline-R, abbiamo " + cards.length + " viaggi disponibili!");
};
const headerBtn = document.getElementById("call-to-action");
headerBtn.onclick = countTrips;

// funzione che mette i badge hot
const badgeGen = () => {
  const cards = document.querySelectorAll("#collapseSummer .card");
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    const currentCard = cards[i];
    currentCard.classList.add("position-relative");
    const badge = document.createElement("span");
    badge.className = "badge rounded-pill text-bg-danger position-absolute";
    badge.style.top = "5px";
    badge.style.right = "5px";
    badge.innerText = "HOT";
    currentCard.appendChild(badge);
  }
};

// funzione che rimuove tutte le card
const removeCards = () => {
  const cards = document.getElementsByClassName("card");
  for (let i = 0; i < cards.length; i++) {
    const currentCard = cards[i];
    currentCard.classList.add("d-none");
  }
};

window.onload = badgeGen;
