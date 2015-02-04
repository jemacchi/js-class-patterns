define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/creational/prototype/Customer',	
		'patterns/creational/prototype/CustomerPrototype'],
	     function($, _, chai, LogHelper, Customer, CustomerPrototype) {

    describe('Prototype pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var proto = new Customer();
			proto.init("n/a", "n/a", "pending");
			var prototype = new CustomerPrototype();
			prototype.init(proto);			
			 
			var customer = prototype.clone();
			customer.say();

			assert(log.get()=='name: n/a n/a, status: pending<br/>','Test passed !!!');
        });

    });

});