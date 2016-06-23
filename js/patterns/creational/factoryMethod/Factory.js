define([
    'class',
	'./Fulltime',
	'./Parttime',
	'./Temporary',
	'./Contractor',
  ],
  /**
   * Factory Method class
   * @exports patterns/creational/factoryMethod
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Fulltime, Parttime, Temporary, Contractor) {
    'use strict';
   /**
    * Factory Method class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Factory
	* @cdxd.class FactoryMethodPattern
	* @cdxd.classdesc FactoryMethodPattern 'A Factory Method creates new objects as instructed by the client. One way to create objects in JavaScript is by invoking a constructor function with the new operator. There are situations however, where the client does not, or should not, know which one of several candidate objects to instantiate. The Factory Method allows the client to delegate object creation while still retaining control over which type to instantiate.<br><br>The key objective of the Factory Method is extensibility. Factory Methods are frequently used in applications that manage, maintain, or manipulate collections of objects that are different but at the same time have many characteristics (i.e. methods and properties) in common. An example would be a collection of documents with a mix of Xml documents, Pdf documents, and Rtf documents.'
    * @cdxd.associatedWith FactoryMethodPattern Fulltime	
    * @cdxd.associatedWith FactoryMethodPattern Parttime	
	* @cdxd.associatedWith FactoryMethodPattern Temporary	
	* @cdxd.associatedWith FactoryMethodPattern Contractor		
    */	
    var Factory = Class.extend(
	/** @lends Factory.prototype */
	{
		/**
		* Override abstract method
		*/
	    createEmployee: function(type) {
			var employee;
			 
			if (type === "fulltime") {
				employee = new Fulltime();
			} else if (type === "parttime") {
				employee = new Parttime();
			} else if (type === "temporary") {
				employee = new Temporary();
			} else if (type === "contractor") {
				employee = new Contractor();
			}
			 
			employee.type = type;
			 
			employee.say = function () {
				log.add(this.type + ": rate " + this.hourly + "/hour");
			}
			 
			return employee;
		},
    });

    return Factory;
  }
);