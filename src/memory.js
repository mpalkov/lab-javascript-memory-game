class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.shuffleCards();
  }

  shuffleCards() {
   // console.log("CardsArray is: ",cardsArray);
    if (this.cards === undefined) {
      return undefined;
    }
    /*
      // My own Shuffle method, UNFINISHED 
      // approach: First make an array with indexnumbers of the cards in ascending order
      // then shuffle the order and put the corresponding cards in this order in a new array which becomes value of this.cards variable.
    const totalCards = this.cards.length;
    console.log("TOTALCARDS: ",totalCards);
    const shuffleOrder = Array.from(Array(totalCards).keys());
    console.log(shuffleOrder);
    shuffleOrder.forEach((card) => {
     const randomNbr = Math.floor(Math.random() * totalCards);
  

    });
       */
    let len = this.cards.length;
    while (len > 0) {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];
      this.cards[rdmInd] = temp;
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    else
      return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2)
      return true;
    else
      return false;
  }
}
