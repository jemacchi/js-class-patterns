define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/structural/bridge/Gestures',
	    'patterns/structural/bridge/Mouse',
		'patterns/structural/bridge/Audio',
		'patterns/structural/bridge/Screen',],
	     function($, _, chai, LogHelper, Gestures, Mouse, Audio, Screen) {

    describe('Bridge pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var screen = new Screen();
			var audio = new Audio();
		
			var hand = new Gestures();
			hand.init(screen);
			var mouse = new Mouse();
			mouse.init(audio);
		
			log.add(hand.tap());
			log.add(hand.swipe());
			log.add(hand.pinch());
		
			log.add(mouse.click());
			log.add(mouse.move());
			log.add(mouse.wheel());

			assert(log.get()=='Screen select<br/>Screen drag<br/>Screen zoom in<br/>Sound oink<br/>Sound screetch<br/>Sound volume up<br/>','Test passed !!!');
        });

    });

});