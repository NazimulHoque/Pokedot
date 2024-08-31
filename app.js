

//default deck that never changes
const deck2 = [
    [1,'K','C'],
    [2,'K','S'],
    [3,'K','D'],
    [4,'K','H'],
    [5,'Q','C'],
    [6,'Q','S'],
    [7,'Q','D'],
    [8,'Q','H'],
    [9,'J','C'],
    [10,'J','S'],
    [11,'J','D'],
    [12,'J','H'],
    [13,10,'C'],
    [14,10,'S'],
    [15,10,'D'],
    [16,10,'H'],
    [17,9,'C'],
    [18,9,'S'],
    [19,9,'D'],
    [20,9,'H'],
    [21,8,'C'],
    [22,8,'S'],
    [23,8,'D'],
    [24,8,'H'],
    [25,7,'C'],
    [26,7,'S'],
    [27,7,'D'],
    [28,7,'H'],
    [29,6,'C'],
    [30,6,'S'],
    [31,6,'D'],
    [32,6,'H'],
    [33,5,'C'],
    [34,5,'S'],
    [35,5,'D'],
    [36,5,'H'],
    [37,4,'C'],
    [38,4,'S'],
    [39,4,'D'],
    [40,4,'H'],
    [41,3,'C'],
    [42,3,'S'],
    [43,3,'D'],
    [44,3,'H'],
    [45,2,'C'],
    [46,2,'S'],
    [47,2,'D'],
    [48,2,'H'],
    [49,'A','C'],
    [50,'A','S'],
    [51,'A','D'],
    [52,'A','H']
    ]


//computes random number in range from 0 inclusive to max exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//an object used during a particular game to deal out cards
let tableDeck = {}

//copy all elements from deck to tableDeck
Object.assign(tableDeck,deck2)


const processTableDeck = (tableDeck, deck) => {

}

playerHand1 = {hand:{}, cash: 0}
playerHand2 = {hand:{}, cash: 0}
playerHand3 = {hand:{}, cash: 0}
playerHand4 = {hand:{}, cash: 0}
playerHand5 = {hand:{}, cash: 0}

let table = {
    tableDeck,
    players:[playerHand1,
             playerHand2,
             playerHand3,
             playerHand4,
             playerHand5],
    community: {},
    bigblind: null,
    smallblind: null,
    currentbet: 0,
    pot: 0,
    dealer: null,
    tablenumber: 0,

}


const dealHand = ( {tableDeck, players} ) =>{
    //take table deck and randomly deal 2 cards to each player, 1 to each player in a circle until all players recieve 2 cards    
    for (let k = 0; k < 2; k++){
        for (let i = 0; i < players.length; i++) {
            drawRandomCard(tableDeck, players[i].hand)
            
          } 
    }
    
    
}

const dealCommunity_flop = ( {tableDeck, community} ) =>{
    //deal community cards
    //to do: other possible cases
    //console.log("------------------------------------------------------------------------------------------------")
    //console.log(tableDeck, community)
    //console.log(community.length)
    //console.log("------------------------------------------------------------------------------------------------")
    if (getObjectLength(community) > 0){
        console.log("already has cards")
        return
    }else{
        for(let i = 0; i < 3; i++){
        
            drawRandomCard(tableDeck, community)
        }
    }
    
}

const dealCommunity_river = ( {tableDeck, community} ) =>{
    if (getObjectLength(community) <3){
        console.log("no flop")
        return
    }else if(getObjectLength(community) == 5){
        return
    }else{
        drawRandomCard(tableDeck, community)
    }

}




const getObjectLength = (obj) => {
    return Object.keys(obj).length
}

const drawRandomCard = (deck, hand) =>{
    // there is a probably  a more efficient way to do this, whomever decides to fix this, you're a nerd
    //get first random card transfer it to the the players hand
    //this is done this way because the index within the object changes, while the key array index only shortens 
    
    //absolute index array of keys 
    var keys = Object.keys(deck);
    length = getObjectLength(keys)
    //select randomly one of the remaining keys
    card1index = keys[getRandomInt(length)]
    //pick a card based on a random key
    card1 = deck[card1index]
    //console.log(card1)
    //console.log(card1index)
    //give the card to the hand
    hand[card1index] = card1
    //delete the card from the deck
    delete  deck[card1index]
}


const detectHands = (community, hand) => {
    cards = Object.assign({}, community, hand)
    console.log(cards)
    //high card
    //pairs
    //2 pair
    //3 of a kind
    //straight
    //flush
    //full house
    //4 of a kind
    //straight flush
    //royal flush
    return
}



const displayCard = (card) => {
    rank = card[1]
    suit = card[2]
    console.log(' _____')
    console.log('|'+rank+'    |')
    console.log('|     |')
    console.log('|  '+suit+'  |')
    console.log('|_____|')

}


const displayCards= (cards) => {
    const keys = Object.keys(cards)
    for (let i = 0 ;  i < keys.length; i++){
        displayCard(cards[keys[i]])
    }
}


//console.log(deck.length)
//console.log(tableDeck)
//console.log(tableDeck[getRandomInt(52)], tableDeck[getRandomInt(52)])

//this is the basic sequence of events, with betting phases inbetween 
dealHand(table)
dealCommunity_flop(table)
dealCommunity_river(table)
dealCommunity_river(table)

//dealCommunity_flop(table)
//dealCommunity_river(table)
//dealCommunity_river(table)
detectHands(table.community, table.players[0].hand)


displayCards(table.community)
displayCards(table.players[0].hand)
//console.log(table)
//console.log(getObjectLength(table.community),table.players.length*2,getObjectLength(table.tableDeck))
//console.log(table.community)
//console.log(table.players)
