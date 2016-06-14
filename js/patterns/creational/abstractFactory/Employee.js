define([
	'./Product',
  ],
  /**
   * Employee product class
   * @exports patters/creational/abstractFactory   
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Product) {
    'use strict';
   /**
    * Employee product class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Employee
	  * @cdxd.class AbstractFactoryPattern
    * @cdxd.inherits AbstractFactoryPattern Product
    */	
    var Employee = Product.extend(
	/** @lends Employee.prototype */
	{
		name: '',
		say: function() {
			log.add("I am employee " + this.name);
		},
    });
    return Employee;
  }
);