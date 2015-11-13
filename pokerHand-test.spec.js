var PokerHand = require( './pokerHand.js' );

describe( 'PokerHand', function() {

	it( 'should evaluate a straight flush', function() {
        var cards = ['Jd', '9d', '10d', '8d', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'straight flush which ranks best' );
    });

    it( 'should evaluate four of a kind', function() {
        var cards = ['Jd', 'Jh', 'Js', 'Jc', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'quads which ranks 2nd' );
    });

    it( 'should evaluate a full house', function() {
        var cards = ['Ad', 'Ah', 'As', '8d', '8s'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'full house which ranks 3rd' );
    });

	it( 'should evaluate a flush', function() {
        var cards = ['Ad', '9d', '3d', '8d', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'flush which ranks 4th' );
    });

    it( 'should evaluate a straight', function() {
        var cards = ['Jd', '9c', '10s', '8h', 'Qh'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'straight which ranks 5th' );
    });

    it( 'should not wrap cards for a straight', function() {
        var cards = ['2d', '3c', '4s', 'Kh', 'Ah'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'high card which ranks worst' );
    });

    it( 'should evaluate three of a kind', function() {
        var cards = ['Jd', 'Js', 'Jc', '8d', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'trips which ranks 6th' );
    });

    it( 'should evaluate two pair', function() {
        var cards = ['Jd', 'Js', '10d', '10c', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'two pair which ranks 7th' );
    });

    it( 'should evaluate a pair', function() {
        var cards = ['Jd', 'Js', '10d', '8d', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'pair which ranks 8th' );
    });

    it( 'should evaluate high card', function() {
        var cards = ['Ac', '9d', '10d', '8d', 'Qd'],
            pokerHand = new PokerHand( cards ),
            result = pokerHand.evaluate();

        expect( result ).toEqual( 'high card which ranks worst' );
    });

});