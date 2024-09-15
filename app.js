

const test1 = {
    '17': [ 18, 9, 'S' ],
    '18': [ 19, 9, 'D' ],
    '16': [ 17, 9, 'D' ],
    '34': [ 35, 5, 'D' ],
    '35': [ 36, 5, 'H' ],
    '38': [ 39, 4, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }



const test12 = {
    '34': [ 35, 5, 'D' ],
    '35': [ 36, 5, 'H' ],
    '38': [ 39, 4, 'D' ],
    '17': [ 18, 9, 'S' ],
    '18': [ 19, 9, 'D' ],
    '16': [ 17, 9, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }

const test13 = {
    '50': [ 51, 'A', 'D' ],
    '27': [ 28, 7, 'H' ],
    '38': [ 39, 4, 'D' ],
    '17': [ 18, 9, 'S' ],
    '18': [ 19, 9, 'D' ],
    '16': [ 17, 9, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }



  const test14 = {
    '46': [ 47, 2, 'D' ],
    '27': [ 28, 7, 'H' ],
    '38': [ 39, 4, 'D' ],
    '17': [ 18, 9, 'S' ],
    '18': [ 19, 9, 'D' ],
    '16': [ 17, 9, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }

  const test2 = {
    '17': [ 18, 9, 'S' ],
    '18': [ 19, 9, 'D' ],
    '2': [ 3, 'K', 'D' ],
    '34': [ 35, 5, 'D' ],
    '35': [ 36, 5, 'H' ],
    '38': [ 39, 4, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }

  const test21 = {
    '1': [ 2, 'K', 'S' ],
    '2': [ 3, 'K', 'D' ],
    '14': [ 15, 10, 'D' ],
    '24': [ 25, 7, 'C' ],
    '27': [ 28, 7, 'H' ],
    '48': [ 49, 'A', 'C' ],
    '49': [ 50, 'A', 'S' ]
  }


  const test3 = {
    '44': [45,2,'C'],
    '45': [46,2,'S'],
    '46': [47,2,'D'],
    '47': [48,2,'H'],
    '35': [ 36, 5, 'H' ],
    '38': [ 39, 4, 'D' ],
    '51': [ 52, 'A', 'H' ]
  }

  const test4 = {
    '11': [ 12, 'J', 'H' ],
    '13': [ 14, 10, 'S' ],
    '21': [ 22, 8, 'S' ],
    '27': [ 28, 7, 'H' ],
    '35': [ 36, 5, 'H' ],
    '36': [ 37, 4, 'C' ],
    '46': [ 47, 2, 'D' ]
  }

  const test5 = {

  }


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


const Ranks = {
        'A' : 14 ,
        'K' : 13 ,
        'Q' : 12 ,
        'J' : 11 ,
         10 : 10 ,
         9  : 9  ,
         8  : 8  ,
         7  : 7  ,
         6  : 6  ,
         5  : 5  ,
         4  : 4  ,
         3  : 3  ,
         2  : 2  
     }
var playerHand1 = {hand:{}, cash: 0}
var playerHand2 = {hand:{}, cash: 0}
var playerHand3 = {hand:{}, cash: 0}
var playerHand4 = {hand:{}, cash: 0}
var playerHand5 = {hand:{}, cash: 0}
 


//an object used during a particular game to deal out cards
let tableDeck = {}

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
    


//computes random number in range from 0 inclusive to max exclusive
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


const copyObj = (obj) => {
    let newObj = Object.assign({}, obj)

    return newObj
}

const getObjectLength = (obj) => {
    return Object.keys(obj).length
}



//copy all elements from deck to tableDeck
Object.assign(tableDeck,deck2)


const processTableDeck = (tableDeck, deck) => {

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





const drawRandomCard = (deck, hand) =>{
    // there is a probably  a more efficient way to do this, whomever decides to fix this, you're a nerd
    //get first random card transfer it to the the players hand
    //this is done this way because the index within the object changes, while the key array index only shortens 
    let card1
    let card1index
    //absolute index array of keys 
    let keys = Object.keys(deck);
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

    let score 
    let bestHand = {}
    let cards = Object.assign({}, community, hand)
    console.log(cards)

    let normalized = normalizeCards(cards)
    
    
    
    
    //full house test
    let normalized_T1 = normalizeCards(test1)
    //two pair test
    let normalized_T2 = normalizeCards(test2)
    //two pair test with edge case
    let normalized_T21 = normalizeCards(test21)
    //4 of a kind test 
    let normalized_T3 = normalizeCards(test3)
    //high card 
    let normalized_T4 = normalizeCards(test4)

    console.log(normalized)
    let pairs = findPairs(normalized)
    let pairs_T1 = findPairs(normalized_T1)
    let pairs_T2 = findPairs(normalized_T2)
    let pairs_T21 = findPairs(normalized_T21)
    let pairs_T3 = findPairs(normalized_T3)
    let pairs_T4 = findPairs(normalized_T4)
    let straight = findStraights(normalized)
    let flush = findFlush(normalized)
    let fullhouse = findFullHouse(normalized)
    //use filter and map
    for (let i = 0 ; i < normalized.length; i ++) {

        //console.log(normalized[i])

    }

    console.log(pairs.bestHand, pairs.winningHand)
    console.log(pairs_T1.bestHand, pairs_T1.winningHand)
    console.log(pairs_T2.bestHand, pairs_T2.winningHand)
    console.log(pairs_T21.bestHand, pairs_T21.winningHand)
    console.log(pairs_T3.bestHand, pairs_T3.winningHand)
    console.log(pairs_T4.bestHand, pairs_T4.winningHand)
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
    return bestHand
}



const findPairs = (hand) => {
    //best multi is an object that contains information about the best multiple card permutation 
    //ex: trips, 2 pairs, full house, quads
    //works by finding the best hand from above, then apending the high cards at the end 
    //input must be normalized for this to work
    let bestMulti = {
        bestHand: '',
        winningHand: []           
    }
    let highcards = []
    let paircount = 0
    let trips = 0
    let quads = 0
    //multi stores all pairs, triples, quads, high cards
    let multi = []
    //hand is normalized set of cards in this format
    //hand = {'11': [12, 'J', 'H']}

    //sort the cards into their respective categories by rank,
    //makes it easier to compare later 
    multi[0]=hand.filter( (card) => card[1] === 'A' )
    multi[1]=hand.filter( (card) => card[1] === 'K' )
    multi[2]=hand.filter( (card) => card[1] === 'Q' )
    multi[3]=hand.filter( (card) => card[1] === 'J' )
    multi[4]=hand.filter( (card) => card[1] === 10 )
    multi[5]=hand.filter( (card) => card[1] === 9 )
    multi[6]=hand.filter( (card) => card[1] === 8 )
    multi[7]=hand.filter( (card) => card[1] === 7 )
    multi[8]=hand.filter( (card) => card[1] === 6 )
    multi[9]=hand.filter( (card) => card[1] === 5 )
    multi[10]=hand.filter( (card) => card[1] === 4 )
    multi[11]=hand.filter( (card) => card[1] === 3 )
    multi[12]=hand.filter( (card) => card[1] === 2 )

    //filter array into just pairs,trips, and quads
   //make own filtered arrays (pairs and singles)
   //then test cases 
   //work through possibilities

    for (let i =0; i < multi.length; i++){
        if (multi[i].length === 1){
            highcards.push(multi[i])
        }
       
        if (multi[i].length === 2){
            if (paircount === 1 && trips === 1){
                continue
            }else if(paircount < 2){
                paircount++ 
                bestMulti.winningHand.push(multi[i])
            }
            
            
        }else if (multi[i].length === 3 ){
            if (paircount === 1 && trips === 1){
               continue
            }else{  
                trips++
                bestMulti.winningHand.push(multi[i])
            }


        }else if (multi[i].length === 4){
            //break as soon as we encounter the first quad, its the highest 
            quads++
            bestMulti.winningHand.push(multi[i])
        }else if (bestMulti.winningHand.length === 5){
            break
        }

    }

    if (quads > 0){
        //4 of a kind
        bestMulti.bestHand = 'quad'
        bestMulti.winningHand.push(highcards[0])

    }else if (trips > 0 && paircount === 1){
        //full house
        bestMulti.bestHand = 'fullhouse'
    }else if (trips > 0 && paircount === 0){
        //3 of a kind
        bestMulti.bestHand = 'trips'
        bestMulti.winningHand.push(highcards[0])
        bestMulti.winningHand.push(highcards[1])
    }else if (paircount >= 2 && trips === 0){
        //2 pair
        bestMulti.bestHand = '2pair'
        bestMulti.winningHand.push(highcards[0])
    }else if (paircount === 1 && trips === 0){
        //one pair
        bestMulti.bestHand = 'pair'
        bestMulti.winningHand.push(highcards[0])
        bestMulti.winningHand.push(highcards[1])
        bestMulti.winningHand.push(highcards[2])
    }else{
        //high card
        bestMulti.bestHand = 'highcard'
        bestMulti.winningHand.push(highcards[0])
        bestMulti.winningHand.push(highcards[1])
        bestMulti.winningHand.push(highcards[2])
        bestMulti.winningHand.push(highcards[3])
        bestMulti.winningHand.push(highcards[4])
    }

    return bestMulti

}


const findStraights = (hand) => {
    //detect sequences
    return 
}


const findFlush = (hand) => {
    //detect number of unique suits
    return 
}

const findFullHouse = (hand) => {
    return 
}



const normalizeCards = (hand) => {
    //current avaialble hand
    let cards = copyObj(hand)
    let normalized = []
     //ranks = [2 ,3 ,4 ,5, 6 ,7 ,8 ,9 , 10 ,'J' ,'Q' ,'K' ,'A']

     while (!isEmpty(cards)){
        let keys = Object.keys(cards);
        let highestCardScore = Ranks[cards[keys[0]][1]]
        let currentHighestCardScore = 0
        let highestCard = cards[keys[0]]
       
        //check for type safety 
   
       for (let i = 0; i < keys.length; i++) {

            currentHighestCardScore = Ranks[cards[keys[i]][1]]

           if (highestCardScore <= currentHighestCardScore){
               highestCardScore = currentHighestCardScore
               highestCard = cards[keys[i]]
              
           }
               
       }
       normalized.push(highestCard)
       delete cards[highestCard[0]-1]
       //console.log(highestCard, highestCardScore)
       //console.log(cards, hand)
       
     }

     
     return normalized
}




const displayCard = (card) => {
    let rank = card[1]
    let suit = card[2]
    console.log(' _____')
    if (rank === 10) {
        console.log('|'+rank+'   |')
    }else{
        console.log('|'+rank+'    |')
    }
    console.log('|     |')
    console.log('|  '+suit+'  |')
    console.log('|_____|')

}




const isEmpty = (obj) => {
    for (const prop in obj) {
      // @ts-ignore
      if (Object.hasOwn(obj, prop)) {
        return false;
      }
    }
  
    return true;
  }


const displayCards = (cards) => {
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




//displayCards(table.community)
//displayCards(table.players[0].hand)
//console.log(table)
//console.log(getObjectLength(table.community),table.players.length*2,getObjectLength(table.tableDeck))
//console.log(table.community)
//console.log(table.players)
