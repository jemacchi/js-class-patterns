describe('Abstract factory pattern e2e tests', function () {
 
  this.timeout(10000);

  beforeEach(dsl(function () {
    browser.navigateTo('/app/index.html');
  }));

  //var assert = chai.assert;   
      
  describe('#reload', function () {
    it('could reload current page', dsl(function () {
      browser.reload();
      browser.window.path(function (path) {
        path.should.equal('/app/index.html');
      });
    }));
  });

});
