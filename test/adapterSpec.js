define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/structural/adapter/Shipping',
	    'patterns/structural/adapter/ShippingAdapter'],
	     function($, _, chai, LogHelper, Shipping, ShippingAdapter) {

    describe('Adapter pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
			var shipping = new Shipping();
			var credentials = {token: "30a8-6ee1"};
			var adapter = new ShippingAdapter(credentials);
			 
			// original shipping object and interface		 
			var cost = shipping.request("78701", "10010", "2 lbs");
			log.add("Old cost: " + cost);
			 
			// new shipping object with adapted interface
			cost = adapter.request("78701", "10010", "2 lbs");
			 
			log.add("New cost: " + cost);
			assert(log.get()=='Old cost: $49.75<br/>New cost: $39.50<br/>','Test passed !!!');
        });

    });

});