define([
	'class',
  ],
  /**
   * Shipping adapter class
   * @exports patters/structural/adapter 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Customer class (to be cloned)
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Customer
    * @cdxd.class PrototypePattern
    */	
    var Customer = Class.extend(
	/** @lends Customer.prototype */
	{
		first: '',
		last: '',
		status: '',
		/**
		* Customer initialization
		*/
		init: function (first, last, status) {
			this.first = first;
			this.last = last;
			this.status = status;
		},		
		/**
		* Shows details on customer
		*/		
		say: function () {
			alert("name: " + this.first + " " + this.last + ", status: " + this.status);
		},	
    });
    return Customer;
  }
);