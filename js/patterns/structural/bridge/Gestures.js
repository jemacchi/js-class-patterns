define([
	'class',
	'./Abstraction'
  ],
  /**
   * Gestures class
   * @exports patterns/structural/bridge 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Abstraction) {
    'use strict';
   /**
    * Gestures class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Gestures
    * @cdxd.class BridgePattern
    * @cdxd.implements BridgePattern Abstraction abstract
    */	
    var Gestures = Abstraction.extend(
	/** @lends Gestures.prototype */
	{
		output: null,
		/**
		* Gestures initialization
		*/
		init: function (output) {
			this.output = output;
		},		
		/**
		* Tap action
		*/
		tap: function() {
			return this.output.click();
		},
        /**
		* Swipe action
		*/
		swipe: function() {
			return this.output.move();
		},
        /**
		* Pan action
		*/
		pan: function() {
			return this.output.drag();
		},
        /**
		* Pinch action
		*/
		pinch: function() {
			return this.output.zoom();
		}       
    });
    return Gestures;
  }
);