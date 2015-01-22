define([
    './Product',
  ],
  /**
   * Contractor employee type
   * @exports patters/creational/factoryMethod
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Contractor employee type
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Contractor
	* @cdxd.class FactoryMethodPattern
	* @cdxd.implements FactoryMethodPattern Product
    */	
    var Contractor = Product.extend(
	/** @lends Contractor.prototype */
	{
		hourly:"$15",
    });	
	
    return Contractor;
  }
);