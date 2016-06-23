define([
	'class',
	'./Abstraction'
  ],
  /**
   * Mouse class
   * @exports patterns/structural/bridge 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Abstraction) {
    'use strict';
   /**
    * Mouse class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Mouse
    * @cdxd.class BridgePattern
    * @cdxd.implements BridgePattern Abstraction abstract
    */	
    var Mouse = Abstraction.extend(
	/** @lends Mouse.prototype */
	{
		output: null,
		/**
		* Mouse initialization
		*/
		init: function (output) {
			this.output = output;
		},		
		/**
		* Click action
		*/
		click: function() {
			return this.output.click();
		},
        /**
		* Move action
		*/
		move: function() {
			return this.output.move();
		},
        /**
		* Down action
		*/
		down: function() {
			return this.output.drag();
		},
        /**
		* Wheel action
		*/
		 wheel: function() {
			return this.output.zoom();
		}       
    });
    return Mouse;
  }
);