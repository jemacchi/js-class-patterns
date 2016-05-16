define([
    './Product',
  ],
  /**
   * Parttime employee type
   * @exports patters/creational/factoryMethod
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Parttime employee type
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Parttime
	* @cdxd.class FactoryMethodPattern
	* @cdxd.implements FactoryMethodPattern Product
    */	
    var Parttime = Product.extend(
	/** @lends Parttime.prototype */
	{
		hourly:"$11",
    });	
	
    return Parttime;
  }
);