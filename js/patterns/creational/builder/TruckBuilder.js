define([
    './AbstractBuilder',
	'./Truck',
  ],
  /**
   * Truck builder class
   * @exports patters/creational/builder
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(AbstractBuilder, Truck) {
    'use strict';
   /**
    * Truck builder class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class TruckBuilder
	* @cdxd.class BuilderPattern
    * @cdxd.inherits BuilderPattern AbstractBuilder abstract
    * @cdxd.associatedWith BuilderPattern Truck	
    */	
    var TruckBuilder = AbstractBuilder.extend(
	/** @lends TruckBuilder.prototype */
	{
		truck: '',
		/**
		* Concrete step1
		*/
		step1: function() {
			this.truck = new Truck();
		},
		/**
		* Concrete step2
		*/
		step2: function() {
			this.truck.addParts();
		},
		/**
		* Concrete get
		*/
		get: function() {
			return this.truck;
		},
    });
    return TruckBuilder;
  }
);