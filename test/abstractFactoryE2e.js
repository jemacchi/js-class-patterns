describe('Abstract factory pattern e2e tests', function () {
 
  this.timeout(15000);

  beforeEach(dsl(function () {
    browser.navigateTo('/index.html');
  }));

  
  /*describe('#Patterns runner tests', function () {
   
    it('test 001', dsl(function () {
      browser.delay(5000);
    }));

  });*/


  describe('#reload', function () {
   
    it('could reload current page', dsl(function () {
      browser.reload();
      browser.window.path(function (path) {
        assert.equal(path,'/index.html');
      });
    }));

  });

});
