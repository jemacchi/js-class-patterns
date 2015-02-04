define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/creational/singleton/Singleton'],
	     function($, _, chai, LogHelper, Singleton) {

    describe('Singleton pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var singleton = new Singleton();
			var instance1 = singleton.getInstance();
			var instance2 = singleton.getInstance();
			 
			log.add("Same instance? " + (instance1 === instance2));

			assert(log.get()=='Same instance? true<br/>','Test passed !!!');
        });

    });

});