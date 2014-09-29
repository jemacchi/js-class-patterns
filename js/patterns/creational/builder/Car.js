define([
	'./product',
  ],
  /**
   * Car product class
   * @exports patters/creational/builder   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Car product class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Car
    * @cdxd.inherits BuilderPattern Product abstract
    */	
    var Car = Product.extend(
	/** @lends Car.prototype */
	{
		doors: 0,
		say: function() {
			log.add("I am a " + this.doors + "-door car");
		},
		addParts: function() {
			this.doors = 4;
		},	
    });
    return Car;
  }
);