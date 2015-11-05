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

// Determine the type of poker hand
PokerHand.prototype.getType = function() {
    'use strict';

    var type = 'HIGH_CARD';

    if ( ) {

    } else if ( ) {

    } else if ( ) {

    } else if ( ) {

    } else if ( ) {

    } else if ( ) {

    } else if ( ) {

    } else if ( ) {

    }

	type = 'PAIR';
	type = 'TWO_PAIR';
	type = 'TRIPS';
    type = 'STRAIGHT'; 
    type = 'FLUSH';
    type = 'FULL_HOUSE';
    type = 'QUADS';
    type = 'STRAIGHT_FLUSH';

    return type;
};

// Determines the number of cards in order
// STRAIGHT
PokerHand.prototype.numInOrder = function() {
    'use strict';

    var numInOrder;

    return numInOrder;
};

// Determines the number of cards with the same suit
// FLUSH
PokerHand.prototype.numSameSuit = function() {
    'use strict';

    var suits = [0, 0, 0, 0];

    for ( var i = 0; i < this.cards.length; i++ ) {
    	var thisSuit = this.getCardSuit( this.cards[i] );

        suits[ this.cardSuitToInt[ thisSuit ] ] += 1;
    };

    return Math.max.apply( null, suits );
};

// Determines the number of cards with the same type
// PAIR, TWO_PAIR', TRIPS, FULL_HOUSE, QUADS
PokerHand.prototype.numSameType = function() {
    var numSameType;

    return numSameType;
};

module.exports = PokerHand;