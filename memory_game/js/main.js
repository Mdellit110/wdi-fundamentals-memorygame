console.log("up and running!");
var createCards = function() {
	return [
	{
		rank: 'Queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'Queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'King',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'King',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
]
}
var cards = createCards();
var cardsInPlay = []

var checkForMatch = function() {
	
	if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
		alert("You found a match!");
		var id1 = cards.indexOf(cardsInPlay[0]);
		cards.splice(id1, 1);
		var id2 = cards.indexOf(cardsInPlay[1]);
		cards.splice(id2, 1); 
	} else {
		alert("Sorry, try again.");		
	}
	cardsInPlay = []
	createBoard();
}

var flipCard = function() {
	
	var cardId = this.getAttribute('data-id');
	if (cardsInPlay.length < 2 && cardsInPlay[0] !== cards[cardId]) {
		cardsInPlay.push(cards[cardId]);
		this.setAttribute('src', cards[cardId].cardImage);
	}
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}

};

var createBoard = function() {
	if (cards.length === 0) {
		cards = createCards();
	}
	var gameBoard = document.getElementById("game-board");
	while (gameBoard.firstChild) {
    	gameBoard.removeChild(gameBoard.firstChild);
	}
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		gameBoard.appendChild(cardElement);

	}
};

createBoard();

