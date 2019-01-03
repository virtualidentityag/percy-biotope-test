const puppeteer = require('puppeteer');
const { percySnapshot } = require('@percy/puppeteer');

const fs = require('fs');
const ignoredFiles = [
    'browserSupport.html',
    'index.html'
];

const getAllPagesInFolder = (name = 'dist') => fs.readdirSync(name)
    .filter((name) => name.indexOf('.html') !== -1)
    .filter((name) => ignoredFiles.indexOf(name) === -1);

describe('Integration test with visual testing', function () {
    let browser = null
    let page = null
    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true,
            timeout: 10000
        })
        page = await browser.newPage()
        await page.goto('http://localhost:8080');
    });

    getAllPagesInFolder().forEach((file) => {
        it(`loads ${file}`, async () => {
            await page.goto(`http://localhost:8080/${file}`);
            //await page.screenshot({ path: `test/screenshots/${file}.png`, fullPage: true });
            await percySnapshot(page, this.getFullName())
        });
    });
});
