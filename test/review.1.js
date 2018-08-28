describe('The product review form', function () {
    it('should add a review when submitted properly', function (done) {
      //  Go to the product page
      browser.url("/product-page.html");
  
      //  Enter the email address
      browser.setValue("#review-email", "email@example.com");
      //  Enter text in the comment form
      browser.setValue("#review-content", "This is the review");
  
      //  Submit the review
      browser.submitForm("#review-content");
  
      //  Assert that our review now appears in the list
      var hasReview = browser.isExisting(".comment=This is the review");
  
      expect(hasReview, "comment text exists").to.be.true;
    });
    // it should show an error message if the input is wrong
    // it should hide the error message when input is corrected
    // it should focus on the first invalid input field on error
  });