define([
    'class',
    'patterns/creational/abstractFactory/Vendor',
	'patterns/creational/abstractFactory/Employee',
	'patterns/creational/abstractFactory/ConcreteFactory',
	'patterns/creational/builder/Shop',
	'patterns/creational/builder/CarBuilder',
	'patterns/creational/builder/TruckBuilder',
	'patterns/creational/factoryMethod/Factory',
	'patterns/creational/prototype/Customer',	
	'patterns/creational/prototype/CustomerPrototype',	
	'patterns/creational/singleton/Singleton',
	'patterns/structural/adapter/Shipping',
	'patterns/structural/adapter/ShippingAdapter',
  ],
  /**
   * Patterns examples runner
   * @exports patterns   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Vendor, Employee, ConcreteFactory, Shop, CarBuilder, TruckBuilder, Factory, Customer, CustomerPrototype, Singleton, Shipping, ShippingAdapter) {
    'use strict';
   /**
    * Patterns examples runner
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class PatternsRunner
    */	
    var PatternsRunner = Class.extend(
	/** @lends PatternsRunner.prototype */
	{
		runAbstractFactoryDemo: function () { 		
			var persons = [];
			var concreteFactory = new ConcreteFactory();
		 
			persons.push(concreteFactory.create(Employee,"Joan DiSilva"));
			persons.push(concreteFactory.create(Employee,"Tim O'Neill"));
			persons.push(concreteFactory.create(Vendor,"Gerald Watson"));
			persons.push(concreteFactory.create(Vendor,"Nicole McNight"));
			 
			for (var i = 0, len = persons.length; i < len; i++) {
				persons[i].say();
			}
			 
			log.show();			
		},
		runBuilderDemo: function () { 	
			var shop = new Shop();
			var carBuilder = new CarBuilder();
			var truckBuilder = new TruckBuilder();
			var car = shop.construct(carBuilder);
			var truck = shop.construct(truckBuilder);
			 
			car.say();
			truck.say();
			 
			log.show();
		},
		runFactoryMethodDemo: function () { 	
			var employees = [];
			var factory = new Factory();
			 
			employees.push(factory.createEmployee("fulltime"));
			employees.push(factory.createEmployee("parttime"));
			employees.push(factory.createEmployee("temporary"));
			employees.push(factory.createEmployee("contractor"));
			for (var i = 0, len = employees.length; i < len; i++) {
				employees[i].say();
			}
			 
			log.show();
		},
		runPrototypeDemo: function() {
			var proto = new Customer();
			proto.init("n/a", "n/a", "pending");
			var prototype = new CustomerPrototype();
			prototype.init(proto);			
			 
			var customer = prototype.clone();
			customer.say();	
			log.show();
		},	
		runSingletonDemo: function() {
		    var singleton = new Singleton();
			var instance1 = singleton.getInstance();
			var instance2 = singleton.getInstance();
			 
			log.add("Same instance? " + (instance1 === instance2));
			log.show();
		},
		runAdapterDemo: function() {
			var shipping = new Shipping();
			var credentials = {token: "30a8-6ee1"};
			var adapter = new ShippingAdapter(credentials);
			 
			// original shipping object and interface		 
			var cost = shipping.request("78701", "10010", "2 lbs");
			log.add("Old cost: " + cost);
			 
			// new shipping object with adapted interface
			cost = adapter.request("78701", "10010", "2 lbs");
			 
			log.add("New cost: " + cost);
			log.show();		
		},
		runUnderDev: function() {
			log.add("Under development");
			log.show();		
		},
    });

    return PatternsRunner;
  }
);