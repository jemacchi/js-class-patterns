define([
	'class',
	'./Implementor'
  ],
  /**
   * Gestures class
   * @exports patters/structural/bridge 
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance, Implementor) {
    'use strict';
   /**
    * Audio class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	* @class Audio
    * @cdxd.class BridgePattern
    * @cdxd.implements BridgePattern Implementor abstract
    */	
    var Audio = Implementor.extend(
	/** @lends Audio.prototype */
	{	
		/**
		* Click action
		*/
		click: function() {
			return "Sound oink";
		},
        /**
		* Drag action
		*/
		drag: function() {
			return "Sound waves";
		},
        /**
		* Move action
		*/
        move: function() {
			return "Sound screetch";
		},
        /**
		* Zoom action
		*/
		 zoom: function() {
			return "Sound volume up";
		}       
    });
    return Audio;
  }
);