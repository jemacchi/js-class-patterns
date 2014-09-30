define([
    './product',
  ],
  /**
   * Temporary employee type
   * @exports patters/creational/factoryMethod
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Temporary employee type
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Temporary
	* @cdxd.class FactoryMethodPattern
	* @cdxd.implements FactoryMethodPattern Product
    */	
    var Temporary = Product.extend(
	/** @lends Temporary.prototype */
	{
		hourly:"$10",
    });	
	
    return Temporary;
  }
);