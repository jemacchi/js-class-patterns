define([
    './AbstractFactory',
	'./Employee',
	'./Vendor',
  ],
  /**
   * Concrete Factory
   * @exports patters/creational/abstractFactory      
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(AbstractFactory, Employee, Vendor) {
    'use strict';
   /**
    * Concrete Factory
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class ConcreteFactory
	  * @cdxd.class AbstractFactoryPattern
    * @cdxd.inherits AbstractFactoryPattern AbstractFactory abstract
    * @cdxd.associatedWith AbstractFactoryPattern Employee	
    * @cdxd.associatedWith AbstractFactoryPattern Vendor	
    */	
    var ConcreteFactory = AbstractFactory.extend(
	/** @lends ConcreteFactory.prototype */
	{
		/**
		* Override abstract method
		*/
	    create: function(product, name) {
			var aProduct = new product();
			aProduct.name = name;
			return aProduct;
		},
    });

    return ConcreteFactory;
  }
);