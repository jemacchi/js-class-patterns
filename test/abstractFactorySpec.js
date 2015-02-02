define(['jquery', 
	    'underscore', 
	    'chai',
	    'helpers/loghelper',
	    'patterns/creational/abstractFactory/Vendor',
	    'patterns/creational/abstractFactory/Employee',
	    'patterns/creational/abstractFactory/ConcreteFactory'],
	     function($, _, chai, LogHelper,Vendor, Employee, ConcreteFactory) {

    describe('Abstract factory pattern tests', function() {

    	var assert = chai.assert;
    	log = new LogHelper();

        it('test 001', function() {
            var persons = [];
			var concreteFactory = new ConcreteFactory();
		 
			persons.push(concreteFactory.create(Employee,"Joan DiSilva"));
			persons.push(concreteFactory.create(Vendor,"Gerald Watson"));
		
			for (var i = 0, len = persons.length; i < len; i++) {
				persons[i].say();
			}

			assert(log.get()=='I am employee Joan DiSilva<br/>'+'I am vendor Gerald Watson<br/>','Test passed !!!');
        });

    });

});