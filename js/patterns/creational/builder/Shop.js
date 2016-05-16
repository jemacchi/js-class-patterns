define([
    'class',
  ],
  /**
   * Shop class, accepts different builders from client side
   * @exports patters/creational/builder  
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Shop class, accepts different builders from client side
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Shop
	* @cdxd.class BuilderPattern
	* @cdxd.implements BuilderPattern Director
	* @cdxd.associatedWith BuilderPattern AbstractBuilder	
    */	
    var Shop = Class.extend(
	/** @lends Shop.prototype */
	{
		/**
		* Method used to construct products using different builders
		*/
	    construct: function(builder) {
			builder.step1();
			builder.step2();
			return builder.get();
		},
    });

    return Shop;
  }
);