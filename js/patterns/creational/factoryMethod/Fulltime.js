define([
    './Product',
  ],
  /**
   * Fulltime employee type
   * @exports patters/creational/factoryMethod
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Fulltime employee type
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Fulltime
	* @cdxd.class FactoryMethodPattern
    * @cdxd.implements FactoryMethodPattern Product	
    */	
    var Fulltime = Product.extend(
	/** @lends Fulltime.prototype */
	{
		hourly:"$12",
    });	
	
    return Fulltime;
  }
);