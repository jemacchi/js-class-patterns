define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/creational/factoryMethod/Factory'],
	     function($, _, chai, LogHelper, Factory) {

    describe('Factory method pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var employees = [];
			var factory = new Factory();
			 
			employees.push(factory.createEmployee("fulltime"));
			employees.push(factory.createEmployee("parttime"));
			employees.push(factory.createEmployee("temporary"));
			employees.push(factory.createEmployee("contractor"));
			for (var i = 0, len = employees.length; i < len; i++) {
				employees[i].say();
			}

			assert(log.get()=='fulltime: rate $12/hour<br/>parttime: rate $11/hour<br/>temporary: rate $10/hour<br/>contractor: rate $15/hour<br/>','Test passed !!!');
        });

    });

});