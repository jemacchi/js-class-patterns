define([
	'class',
  ],
  /**
   * Singleton
   * @exports patterns/creational/singleton
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Singleton
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Singleton
	* @cdxd.classdesc SingletonPattern 'The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.<br><br>Singletons are useful in situations where system-wide actions need to be coordinated from a single central place. An example is a database connection pool. The pool manages the creation, destruction, and lifetime of all database connections for the entire application ensuring that no connections are 'lost'.<br><br>Singletons reduce the need for global variables which is particularly important in JavaScript because it limits namespace pollution and associated risk of name collisions. The Module pattern (see our JavaScript + jQuery Design Pattern Framework) is JavaScript's manifestation of the Singleton pattern.<br><br>Several other patterns, such as, Factory, Prototype, and Façade are frequently implemented as Singletons when only one instance is needed.'
    * @cdxd.class SingletonPattern
    */	
    var Singleton = Class.extend(
	/** @lends Singleton.prototype */
	{
		instance: '',
		getInstance: function () {
			if (!this.instance) {
				this.instance = new Object("I am the instance");
			};
			return this.instance;
		},
    });
    return Singleton;
  }
);