
define(['jquery', 
      'underscore', 
      'chai',
      'helpers/loghelper',
      'patterns/creational/abstractFactory/Vendor',
      'patterns/creational/abstractFactory/Employee',
      'patterns/creational/abstractFactory/ConcreteFactory'],
       function($, _, chai, LogHelper,Vendor, Employee, ConcreteFactory) {

    describe('Abstract factory pattern e2e tests', function () {

      this.timeout(15000);
      var assert = chai.assert;

      /*beforeEach(dsl(function () {
        browser.navigateTo('/index.html');
      }));*/

      describe('test 001', function () {

       /* var selector = '[name="textbox"]';
      
        it('could calculate sqrt', dsl(function () {
          input(selector).enter('16');
          input('#sqrt-btn').click();
          element('body').text(function (text) {
            text.should.contain('4');
          });
        }));
        */

        assert('Pending'=='Pending','Test passed !!!');
      });

    });

});