console.log("up and running!");
var cards = [
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
];
var cardsInPlay = []

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");	
	} else {
		console.log("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
	console.log('user flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
};

flipCard(0);
flipCard(1);

checkForMatch();

