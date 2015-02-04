define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/creational/builder/Shop',
		'patterns/creational/builder/CarBuilder',
		'patterns/creational/builder/TruckBuilder'],
	     function($, _, chai, LogHelper, Shop, CarBuilder, TruckBuilder) {

    describe('Builder pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var shop = new Shop();
			var carBuilder = new CarBuilder();
			var truckBuilder = new TruckBuilder();
			var car = shop.construct(carBuilder);
			var truck = shop.construct(truckBuilder);
			 
			car.say();
			truck.say();

			assert(log.get()=='I am a 4-door car<br/>I am a 2-door Truck<br/>','Test passed !!!');
        });

    });

});