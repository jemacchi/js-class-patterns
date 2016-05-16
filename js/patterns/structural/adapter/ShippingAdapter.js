define([
	'class',
	'./Adapter',
	'./AdvancedShipping'
  ],
  /**
   * Shipping adapter class
   * @exports patters/structural/adapter 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Adapter, AdvancedShipping) {
    'use strict';
   /**
    * Shipping adapter class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class ShippingAdapter
    * @cdxd.class AdapterPattern
    * @cdxd.implements AdapterPattern Adapter abstract 
    * @cdxd.associatedWith AdapterPattern Shipping
    */	
    var ShippingAdapter = Adapter.extend(
	/** @lends ShippingAdapter.prototype */
	{
		shipping: null,
		/**
		* ShippingAdapter initialization
		*/
		init: function (credentials) {
			this.shipping = new AdvancedShipping();
			this.shipping.login(credentials);
		},		
		/**
		* Calculate shipping
		*/
		 request: function(zipStart, zipEnd, weight) {
			this.shipping.setStart(zipStart);
			this.shipping.setDestination(zipEnd);
			return this.shipping.calculate(weight);
		}	
    });
    return ShippingAdapter;
  }
);