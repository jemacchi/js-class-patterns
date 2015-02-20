describe('Abstract factory pattern e2e tests', function () {
 
  this.timeout(15000);

  beforeEach(dsl(function () {
    browser.navigateTo('http://localhost:8000/');
  }));
  
  describe('run sample', function () {
    it('run sample tests', dsl(function () {
      input('#abstractFactoryBtn').click();
      element('#logContent').text(function (text) {
        assert.equal(text,"I am employee Joan DiSilvaI am employee Tim O'NeillI am vendor Gerald WatsonI am vendor Nicole McNight");
      });
    }));

  });

  describe('#reload', function () {
   
    it('could reload current page', dsl(function () {
      browser.reload();
      browser.window.path(function (path) {
        assert.equal(path,'/');
      });
    }));

  });

});
