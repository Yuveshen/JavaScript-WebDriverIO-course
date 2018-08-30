describe('Main Menu', function () {
    it('should open on click', function () {
      browser.url('./');
  
      browser.click('*=Our Products');
  
      var results = browser.checkViewport({
        hide: ['.orbit'] 
      });
      // takes a snapshot of the drop down and the rest of the screen whilst ignoring the carousel image so it does not fail
  
      expect(results[0].isWithinMisMatchTolerance).to.be.true;
    })
  })