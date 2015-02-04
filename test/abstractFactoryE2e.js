var assert = require('chai');

describe('Abstract factory pattern e2e tests', function () {
 
  //this.timeout(15000);

console.log('e2e');
  /*beforeEach(dsl(function () {
    browser.navigateTo('http://www.yahoo.com.ar');
  }));

  //var assert = chai.assert;   
      
  /*describe('#reload', function () {

    console.log('Calling reload 1');
    
    it('could reload current page', dsl(function () {
      console.log('Calling reload 2');
      browser.reload();
      browser.window.path(function (path) {
        assert.equal(path,'/index.html');
        //path.should.equal('/index.html');
      });
    }));

  });*/

  describe('#indexOf()', function(){
    console.log('index');

    it('test', function(){
      console.log('test');
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
    })

  });

});
