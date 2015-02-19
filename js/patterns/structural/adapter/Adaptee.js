define([
	'class',
  ],
  /**
   * Adaptee class
   * @exports patters/structural/adapter
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Adaptee class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Adaptee
	  * @cdxd.classdesc AdapterPattern 'The Adapter pattern translates one interface (an object's properties and methods) to another. Adapters allows programming components to work together that otherwise wouldn't because of mismatched interfaces. The Adapter pattern is also referred to as the Wrapper Pattern.<br><br>One scenario where Adapters are commonly used is when new components need to be integrated and work together with existing components in the application.<br><br>Another scenario is refactoring in which parts of the program are rewritten with an improved interface, but the old code still expects the original interface.'
    * @cdxd.abstract AdapterPattern
    */	
    var Adaptee = Class.extend(
	/** @lends Adaptee.prototype */
	{	
    });
    return Adaptee;
  }
);