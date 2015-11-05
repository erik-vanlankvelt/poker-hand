# poker-hand
Evaluates a poker hand

### Setup

Install Node - https://nodejs.org

Install Jasmine - Open a terminal and run:
```
npm install jasmine-node -g
```

Clone the project - Open a terminal and run:
```
git clone https://github.com/erik-vanlankvelt/poker-hand
```

### Running Tests
Open a terminal and cd into the poker-hand directory. Then run:
```
jasmine-node .
```

### How To Use
Create a module that can be loaded
```
var PokerHand = require( './pokerHand.js' );
```

Create a new poker hand and pass in the cards array:
```
var pokerHand = new PokerHand( ['10h', '9d', '8s', '7c', '6h'] )
```

Card array requirements
- All cards should be a string and consist of a type and suit
- All card types should have an uppercase letter or number. For example: A = Ace, K = King, Q = Queen, J = Jack, 10, 9, 8, 7, 6, 5, 4, 3, 2
- All card suits should have a lowercase letter. For example: s = spades, h = hearts, c = clubs, d = diamonds

To evaluate a poker hand:
```
pokerHand.evaluate();
```
