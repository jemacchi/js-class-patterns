define([
    './AbstractBuilder',
	'./Car',
  ],
  /**
   * Car builder class
   * @exports patterns/creational/builder
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(AbstractBuilder, Car) {
    'use strict';
   /**
    * Car builder class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class CarBuilder
	* @cdxd.class BuilderPattern
    * @cdxd.inherits BuilderPattern AbstractBuilder abstract
    * @cdxd.associatedWith BuilderPattern Car		
    */	
    var CarBuilder = AbstractBuilder.extend(
	/** @lends CarBuilder.prototype */
	{
		car: '',
		/**
		* Concrete step1
		*/
		step1: function() {
			this.car = new Car();
		},
		/**
		* Concrete step2
		*/
		step2: function() {
			this.car.addParts();
		},
		/**
		* Concrete get
		*/
		get: function() {
			return this.car;
		},
    });
    return CarBuilder;
  }
);