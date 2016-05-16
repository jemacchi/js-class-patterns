define([
	'./Product',
  ],
  /**
   * Truck product class
   * @exports patters/creational/builder   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Truck product class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Truck
    * @cdxd.inherits BuilderPattern Product abstract
    */	
    var Truck = Product.extend(
	/** @lends Truck.prototype */
	{
		doors: 0,
		say: function() {
			log.add("I am a " + this.doors + "-door Truck");
		},
		addParts: function() {
			this.doors = 2;
		},	
    });
    return Truck;
  }
);