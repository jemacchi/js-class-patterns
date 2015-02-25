define([
	'class',
  ],
  /**
   * Adapter class
   * @exports patters/structural/adapter  
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Adapter class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Adapter
    * @cdxd.abstract AdapterPattern
    * @cdxd.associatedWith AdapterPattern Adaptee
    */	
    var Adapter = Class.extend(
	/** @lends Adapter.prototype */
	{
		request: function(zipStart, zipEnd, weight) {},
    });
    return Adapter;
  }
);