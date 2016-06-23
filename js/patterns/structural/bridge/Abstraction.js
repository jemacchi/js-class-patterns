define([
	'class',
  ],
  /**
   * Abstraction class
   * @exports patters/structural/bridge
   * @version 1.0
   * @author  Jose Macchi <jemacchi@yahoo.com.ar>
   */	
  function(Inheritance) {
    'use strict';
   /**
    * Abstraction class
    * @version 1.0
    * @author  Jose Macchi <jemacchi@yahoo.com.ar>
	  * @class Abstraction
	  * @cdxd.classdesc BridgePattern ' The Bridge pattern allows two components, a client and a service, to work together with each component having its own interface. Bridge is a high-level architectural pattern and its main goal is to write better code through two levels of abstraction. It facilitates very loose coupling of objects. It is sometimes referred to as a double Adapter pattern.<br><br>An example of the Bridge pattern is an application (the client) and a database driver (the service). The application writes to a well-defined database API, for example ODBC, but behind this API you will find that each driver's implementation is totally different for each database vendor (SQL Server, MySQL, Oracle, etc.).<br><br>The Bridge pattern is a great pattern for driver development but it is rarely seen in JavaScript. '
    * @cdxd.abstract BridgePattern
    * @cdxd.associatedWith BridgePattern Implementor
    */	
    var Abstraction = Class.extend(
	/** @lends Abstraction.prototype */
	{	
    });
    return Abstraction;
  }
);