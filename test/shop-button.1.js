var assert = require('assert');

describe('Shop CTA Button', function() {
    it('shold link to the product page', function() {
        browser.url('./');

        var title = browser.getTitle()
        assert.equal(title, 'Robot Parts Emporium');
        console.log('Title is: ' + title);

        browser.click('.shop-callout a');
        var productTitle = browser.getTitle()
        assert.equal(productTitle, 'Totally Not Evil Sentient Robot - Robot Parts Emporium');
        console.log('Title is: ' + productTitle);

        var url = browser.getUrl()
        var containsFile = url.includes('product-page.html');
        assert.ok(containsFile, 'URL mismatch');
        console.log('Url is: ' + url);
    })
})
