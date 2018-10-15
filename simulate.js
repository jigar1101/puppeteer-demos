const puppeteer = require('puppeteer');
const path = require('path');

async function performPuppeteerOperations() {

	const browser = await puppeteer.launch();
	  const page = await browser.newPage();
	  await page.setViewport({
		width: 1280,
		height: 720
	  });
	  await page.goto('https://www.google.com');
	  await page.type("#lst-ib", "OK Google");
	  const savePath = path.join(__dirname, 'google.png')
	  await page.screenshot({path: savePath});

	  await browser.close();

	return "Success"
}


module.exports = {
	performPuppeteerOperations: function() {
		return performPuppeteerOperations()
	}
 }