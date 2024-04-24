var assert = require('assert');

const { Builder, Browser, By, Key, until } = require('selenium-webdriver')

describe('Google Search', function () {
	it('Should find cats', async function(done){
		let driver = await new Builder().forBrowser(Browser.CHROME).build()
		await driver.get('https://google.com')
		await driver.findElement(By.xpath('//*[@id="APjFqb"]')).sendKeys('cats', Key.RETURN)
		const text = await driver.findElement(By.xpath('/html/body/div[3]/div[2]/form/div[1]/div[1]/div[2]/div/div[2]/textarea')).getText();
		done();
		console.log("text text text", text);
		assert.equal(text, "cats");
		})
	})
