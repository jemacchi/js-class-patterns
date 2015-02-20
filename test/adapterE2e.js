describe('Adapter pattern e2e tests', function () {
 
  this.timeout(15000);

  beforeEach(dsl(function () {
    browser.navigateTo('http://localhost:8000/');
  }));
  
  describe('run sample', function () {
    it('run sample tests', dsl(function () {
      input('#adapterBtn').click();
      element('#logContent').text(function (text) {
        assert.equal(text,"Old cost: $49.75New cost: $39.50");
      });
    }));

  });

});
