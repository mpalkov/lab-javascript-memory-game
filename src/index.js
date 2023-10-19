const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const turnCard = (card) => {
	card.classList.toggle('turned');
};

const setCardAsTurned = (card) => {
 // UNFINISHED
};

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      turnCard(card);
      let picked = memoryGame.pickedCards;
      console.log(picked);
      if (picked.length < 2)
      {
        console.log("picked < 2")
          picked.push(card);
      }
      if (picked.length === 2) {
        console.log ("picked === 2")
        const card1 = picked[0];
        console.log("picked[0]: ", picked[0], memoryGame.pickedCards[0], memoryGame.pickedCards[0] === picked[0]);
        console.log("picked[0].name: ", picked[0].getAttribute("name"), memoryGame.pickedCards[0].getAttribute("name"));
        const card2 = picked[1];
        const name1 = card1.getAttribute("data-card-name");
        const name2 = card2.getAttribute("data-card-name");
        console.log("name1: ", name1, name2)
        // if pair is correct
        if (memoryGame.checkIfPair(name1, name2)) {
          console.log("PAIR FOUND!", picked);
          //get class blocked to both cards
          card1.classList.add("blocked");
          card2.classList.add("blocked");
          }
          else {
            setTimeout(() => {
              console.log("returning cards", memoryGame.pickedCards[0]);
              turnCard(memoryGame.pickedCards[0]);
              turnCard(memoryGame.pickedCards[1]);
            }, 2000);
          }
          // clean list of pickedcards
          memoryGame.pickedCards = [];
          const isFinished = memoryGame.checkIfFinished();
          if (isFinished) {
            alert("BRAVO!!!");
          }
        }
    });
  });
});
