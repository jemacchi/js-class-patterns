define([
	'class',
	'./customer',
  ],
  /**
   * CustomerPrototype class
   * @exports patters/creational/prototype   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Customer) {
    'use strict';
   /**
    * CustomerPrototype class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class CustomerPrototype
	* @cdxd.classdesc PrototypePattern 'The Prototype Pattern creates new objects, but rather than creating non-initialized objects it returns objects that are initialized with values it copied from a prototype - or sample - object. The Prototype pattern is also referred to as the Properties pattern.<br><br>An example of where the Prototype pattern is useful is the initialization of business objects with values that match the default values in the database. The prototype object holds the default values that are copied over into a newly created business object.<br><br>Classical languages rarely use the Prototype pattern, but JavaScript being a prototypal language uses this pattern in the construction of new objects and their prototypes.'
    * @cdxd.class PrototypePattern
    * @cdxd.associatedWith PrototypePattern Customer
    */	
    var CustomerPrototype = Class.extend(
	/** @lends CustomerPrototype.prototype */
	{	
		proto: '',
		/**
		* CustomerPrototype initialization
		*/
		init: function (proto) {
			this.proto = proto;
		},		
		clone: function () {
			var customer = new Customer();
			 
			customer.first = this.proto.first;
			customer.last = this.proto.last;
			customer.status = this.proto.status;
			 
			return customer;
		},
    });
    return CustomerPrototype;
  }
);