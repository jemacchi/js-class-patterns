define([
    'class',
    'patterns/creational/abstractfactory/vendor',
	'patterns/creational/abstractfactory/employee',
	'patterns/creational/abstractfactory/concretefactory',
	'patterns/creational/builder/shop',
	'patterns/creational/builder/carBuilder',
	'patterns/creational/builder/truckBuilder',
	'patterns/creational/factorymethod/factory',
  ],
  /**
   * Patterns examples runner
   * @exports patterns   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Vendor, Employee, ConcreteFactory, Shop, CarBuilder, TruckBuilder, Factory) {
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
    });

    return PatternsRunner;
  }
);