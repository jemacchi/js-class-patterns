define([
	'./Product',
  ],
  /**
   * Vendor product class
   * @exports patters/creational/abstractFactory   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Vendor product class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Vendor
    * @cdxd.inherits AbstractFactoryPattern Product abstract
    */	
    var Vendor = Product.extend(
	/** @lends Vendor.prototype */
	{
		name: '',
		say: function() {
			log.add("I am vendor " + this.name);
		},		
    });
    return Vendor;
  }
);