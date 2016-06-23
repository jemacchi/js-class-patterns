define([
	'class',
	'./Implementor'
  ],
  /**
   * Screen class
   * @exports patters/structural/bridge 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Implementor) {
    'use strict';
   /**
    * Screen class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Screen
    * @cdxd.class BridgePattern
    * @cdxd.implements BridgePattern Implementor abstract
    */	
    var Screen = Implementor.extend(
	/** @lends Screen.prototype */
	{	
		/**
		* Click action
		*/
		click: function() {
			return "Screen select";
		},
        /**
		* Drag action
		*/
		drag: function() {
			return "Screen move";
		},
        /**
		* Move action
		*/
        move: function() {
			return "Screen drag";
		},
        /**
		* Zoom action
		*/
		 zoom: function() {
			return "Screen zoom in";
		}       
    });
    return Screen;
  }
);