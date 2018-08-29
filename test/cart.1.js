//Pre POM approach
describe("Cart Functionality", function () {
    var btn = "#buyNowButton";
    var qty = "#qty";
  
    beforeEach(function () {
      browser.url("/product-page.html");
    });
  
    it('should only let you buy after setting a quantity', function () {
      var isBtnEnabled = browser.isEnabled(btn);
      expect(isBtnEnabled, "'buy now' should be disabled to begin").to.be.false;
  
      // Add qty
      browser.setValue(qty, 10);
  
      isBtnEnabled = browser.isEnabled(btn);
      expect(isBtnEnabled, "'buy now' is now enabled").to.be.true;
    });
  
    describe("checkout process", function () {
      beforeEach(function () {
        // Add qty
        browser.setValue(qty, 10);
  
        // Click "buy now"
        browser.click(btn);
      });
  
      it('should disable buy now button during processing', function () {
        // Verify "buy now" is disabled
        var isBtnEnabled = browser.isEnabled(btn);
        expect(isBtnEnabled, "'buy now' should be disabled after clicking").to.be.false;
  
        var btnText = browser.getText(btn);
        expect(btnText, "Verify 'buy now' text has changed").to.contain("Purchasing");
      });
  
      it('should show a thank you message with qty and type', function () {
        var thankYou = ".callout*=Thank you human";
  
        // waitForExist "thank you message"
        browser.waitForExist(thankYou);
  
        // verify is has proper qty and type
        var thankText = browser.getText(thankYou);
        expect(thankText).to.contain("10 T-800 Model 101");
      });
  
      it('should clear input after completion', function () {
        // waitForValue for qty input
        browser.waitForValue(qty, null, true);
      });
  
      it('should reset button text after purchase completes', function () {
        // wait for button to return back to 'buy now'
        browser.waitUntil(function () {
          return browser.getText(btn) !== 'Purchasing...'
        }, 3000);
  
        // Verify button now says 'buy now'
        var btnText = browser.getText(btn);
        expect(btnText).to.equal('Buy Now');
      })
  
      it('should hide thank you message after clicking close button', function () {
        var thankYou = ".callout*=Thank you human";
  
        // waitForExist "thank you message"
        browser.waitForExist(thankYou);
  
        // Click close button
        browser.click(".close-button");
  
        // use "reverse" flag to wait for it to disappear
        browser.waitForVisible(thankYou, null, true);
      });
    });
  });