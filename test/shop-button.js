describe('Shop CTA Button', function() {
    it('should link to the product page', function() {
        browser.url('./');

        var title = browser.getTitle()
        expect(title).to.equal('Robot Parts Emporium');

        var results = browser.checkElement('.shop-callout a', {
            misMatchTolerance: 15
        })

        console.log(results);
    
        expect(results[0].isWithinMisMatchTolerance).to.be.true;

        browser.click('.shop-callout a');

        var productTitle = browser.getTitle()
        expect(productTitle).to.equal('Totally Not Evil Sentient Robot - Robot Parts Emporium');

        var url = browser.getUrl()
        expect(url).to.include('product-page.html', 'URL mismatch');



    })
})
