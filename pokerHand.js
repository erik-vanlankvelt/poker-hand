// new PokerHand() invokes the function which creates a new poker hand,
// with an array of cards being passed in

// All cards should be a string and consist of a type and suit

// All card types should have an uppercase letter or number
// A = Ace, K = King, Q = Queen, J = Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2

// All card suits should have a lowercase letter
// s = spades, h = hearts, c = clubs, d = diamonds

// A new hand should be created each time before invoking other functions on the hand
var PokerHand = function( cards ) {
    'use strict';

    this.cards = cards;
};

// Mapping for card suits
PokerHand.prototype.cardSuitToInt = {
    's': 0, 
    'h': 1, 
    'c': 2, 
    'd': 3
};

// Mapping for card types
PokerHand.prototype.cardTypeToInt = {
    '2': 0,
    '3': 1,
    '4': 2,
    '5': 3,
    '6': 4,
    '7': 5,
    '8': 6,
    '9': 7,
    '10': 8,
    'J': 9,
    'Q': 10,
    'K': 11,
    'A': 12
};

// Mapping for poker hand types and their respective rank
PokerHand.prototype.typeToRank = {
    'HIGH_CARD': 'worst', 
    'PAIR': '8th', 
    'TWO_PAIR': '7th', 
    'TRIPS': '6th',
    'STRAIGHT': '5th', 
    'FLUSH': '4th', 
    'FULL_HOUSE': '3rd', 
    'QUADS': '2nd',
    'STRAIGHT_FLUSH': 'best'
};

// Evaluate a poker hand and determine its rank,
// which returns a string
PokerHand.prototype.evaluate = function() {
    'use strict';

    var rank = this.getRank().replace(/_/g, ' ').toLowerCase(),
        type = this.getType().replace(/_/g, ' ').toLowerCase();

    return 'You have ' + type + ' which ranks ' + rank;
};

// Determines the suit of a card
PokerHand.prototype.getCardSuit = function( card ) {
    'use strict';

    var suit,
        characters = card.split('');

    for ( var i = 0; i < characters.length; i++ ) {
        
        // card suits are lowercase letters and not a number
        if ( characters[i] === characters[i].toLowerCase() && isNaN( characters[i] ) {
            suit = characters[i];
        }
    }

    return suit;
};

// Determines the type of a card
PokerHand.prototype.getCardType = function( card ) {
    'use strict';

    var typeArray = [], // can have more than one character
        characters = card.split('');

    for ( var i = 0; i < characters.length; i++ ) {
        
        // card types are a number or uppercase letters
        if ( !isNaN( characters[i] ) {
            typeArray.push( characters[i] );
        } else if ( characters[i] === characters[i].toUpperCase() ) {
            typeArray.push( characters[i] );
        }
    }

    return typeArray.toString();
};

// Determine the poker hand's rank
PokerHand.prototype.getRank = function() {
    'use strict';

    return this.typeToRank[ this.getType() ];
};

// Determines the number of cards with the same type, 
// and returns an array
// PAIR, TWO_PAIR', TRIPS, FULL_HOUSE, QUADS
PokerHand.prototype.getSameType = function() {
    'use strict';

    // 13 possible card types per suit
    var types = new Array(13);

    // Set each value to zero
    for ( var i = 0; i < 13; i++ ) {
        types[i] = 0;                
    }

    for ( var i = 0; i < this.cards.length; i++ ) {
        var thisType = this.getCardType( this.cards[i] );

        // Increment type at key
        types[ this.cardTypeToInt[ thisType ] ] += 1;
    };

    return types;
};

// Determine the type of poker hand
PokerHand.prototype.getType = function() {
    'use strict';

    var totalCards = 5,
        isFlush = this.numSameSuit() === totalCards,
        isStraight = this.numInOrder() === totalCards,
        pairCount = 0,
        sameTypeArray = this.getSameType(),
        type = 'HIGH_CARD';

    // Special case to check for number of pairs
    for ( var i = 0; i < sameTypeArray.length; i++ ) {

        if ( sameTypeArray[i] === 2 ) {
            pairCount++;
        }
    }

    if ( isFlush && isStraight ) {
        type = 'STRAIGHT_FLUSH';
    } else if ( isFlush ) {
        type = 'FLUSH';
    } else if ( isStraight ) {
        type = 'STRAIGHT';
    } else if ( sameTypeArray.indexOf( 4 ) > -1 ) {
        // contains 4 of the same type
        type = 'QUADS';
    } else if ( sameTypeArray.indexOf( 3 ) > -1 && pairCount ) {
        // contains 3 of the same type and 2 of the same type
        type = 'FULL_HOUSE';
    } else if ( sameTypeArray.indexOf( 3 ) > -1 ) {
        // contains 3 of the same type
        type = 'TRIPS';
    } else if ( pairCount > 1 ) {
        type = 'TWO_PAIR';
    } else if ( pairCount ) {
        type = 'PAIR';
    }

    return type;
};

// Determines the number of cards in order
// STRAIGHT
PokerHand.prototype.numInOrder = function() {
    'use strict';

    var numInOrder = 0,
        typeArray = [];

    // Convert the type strings to integers and push to an array
    for ( var i = 0; i < this.cards.length; i++ ) {
        var thisType = this.getCardType( this.cards[i] );

        typeArray.push( this.cardTypeToInt[ thisType ] );
    };

    // Sort the array by number
    typeArray = typeArray.sort( function( a, b ) { 
        return a - b;
    });

    // Find the number of cards in order
    for ( var i = 0; i < typeArray.length; i++ ) {
        var thisCard = typeArray[i],
            nextCard = typeArray[i + 1];
        
        // Are the two cards within one?
        if ( thisCard === nextCard + 1  ) {
            numInOrder += 1;
        }
    };

    return numInOrder;
};

// Determines the number of cards with the same suit
// FLUSH
PokerHand.prototype.numSameSuit = function() {
    'use strict';

    // 4 possible suits
    var suits = new Array(4);

    // Set each value to zero
    for ( var i = 0; i < 4; i++ ) {
        suits[i] = 0;                 
    }

    for ( var i = 0; i < this.cards.length; i++ ) {
        var thisSuit = this.getCardSuit( this.cards[i] );

        // Increment suit at key
        suits[ this.cardTypeToInt[ thisSuit ] ] += 1;
    };

    return Math.max.apply( null, suits );
};

module.exports = PokerHand;