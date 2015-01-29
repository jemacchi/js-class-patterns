describe('karma e2e dsl', function () {

  this.timeout(15000);

  beforeEach(dsl(function () {
    browser.navigateTo('/index.html');
  }));

  describe('Abstract factory pattern e2e test', function () {

    var selector = '[name="textbox"]';
	
    it('could calculate sqrt', dsl(function () {
      input(selector).enter('16');
	    input('#sqrt-btn').click();
      element('body').text(function (text) {
        text.should.contain('4');
      });
    }));

  });

});


