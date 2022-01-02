
//Prototype deck that never changes
const deck = [
            'K of Clubs',
            'K of Spades',
            'K of Diamonds',
            'K of Hearts',
            'Q of Clubs',
            'Q of Spades',
            'Q of Diamonds',
            'Q of Hearts',
            'J of Clubs',
            'J of Spades',
            'J of Diamonds',
            'J of Hearts',
            '10 of Clubs',
            '10 of Spades',
            '10 of Diamonds',
            '10 of Hearts',
            '9 of Clubs',
            '9 of Spades',
            '9 of Diamonds',
            '9 of Hearts',
            '8 of Clubs',
            '8 of Spades',
            '8 of Diamonds',
            '8 of Hearts',
            '7 of Clubs',
            '7 of Spades',
            '7 of Diamonds',
            '7 of Hearts',
            '6 of Clubs',
            '6 of Spades',
            '6 of Diamonds',
            '6 of Hearts',
            '5 of Clubs',
            '5 of Spades',
            '5 of Diamonds',
            '5 of Hearts',
            '4 of Clubs',
            '4 of Spades',
            '4 of Diamonds',
            '4 of Hearts',
            '3 of Clubs',
            '3 of Spades',
            '3 of Diamonds',
            '3 of Hearts',
            '2 of Clubs',
            '2 of Spades',
            '2 of Diamonds',
            '2 of Hearts',
            'A of Clubs',
            'A of Spades',
            'A of Diamonds',
            'A of Hearts'
            ]


//computes random number in range from 0 inclusive to max exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//an object used during a particular game to deal out cards
let tableDeck = {}

Object.assign(tableDeck,deck)

playerHand1 = {}
playerHand2 = {}
playerHand3 = {}
playerHand4 = {}
playerHand5 = {}

let table = {
    tableDeck,
    players:[playerHand1,
             playerHand2,
             playerHand3,
             playerHand4,
             playerHand5],
    community: {}
}


const dealHand = ({tableDeck, players}) =>{
    //take table deck and randomly deal 2 cards to each player, 1 to each player in a circle until all players recieve 2 cards    
    for (let k = 0; k < 2; k++){
        for (let i = 0; i < players.length; i++) {
            drawRandomCard(players[i], tableDeck)
            
          } 
    }
    
    
}

const dealCommunity = ({tableDeck, community}) =>{
    //deal community cards after initial player phase
}


const getObjectLength = (obj) => {
    return Object.keys(obj).length
}

const drawRandomCard = (hand, deck) =>{
    // there is a probably  a more efficient way to do this, whomever decides to fix this, you're a nerd
    //get first random card transfer it to the the players hand
    //this is done this way because the index within the object changes, while the key array index only shortens 
    
    //absolute index array of keys 
    var keys = Object.keys(deck);
    length = getObjectLength(keys)
    card1index = keys[getRandomInt(length)]
    card1 = deck[card1index]
    hand[card1index] = card1
    delete  deck[card1index]
}


//console.log(deck.length)
//console.log(tableDeck)
//console.log(tableDeck[getRandomInt(52)], tableDeck[getRandomInt(52)])

dealHand(table)

console.log(table)
