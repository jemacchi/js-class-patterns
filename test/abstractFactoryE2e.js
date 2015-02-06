describe('Abstract factory pattern e2e tests', function () {
 
  this.timeout(15000);

  beforeEach(dsl(function () {
    browser.navigateTo('/index.html');
  }));
  
  describe('run sample', function () {

    it('run sample tests', dsl(function () {
      input('#abstractFactoryBtn').click();
      element('#logContent').text(function (text) {
        //assert.equal(text,'I am employee Joan DiSilva<br/>'+'I am vendor Gerald Watson<br/>');
        assert.equal(text,'');
      });
    }));

  });

  describe('#reload', function () {
   
    it('could reload current page', dsl(function () {
      browser.reload();
      browser.window.path(function (path) {
        assert.equal(path,'/index.html');
      });
    }));

  });

});
