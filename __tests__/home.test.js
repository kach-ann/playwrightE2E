import { chromium } from 'playwright'

describe('Open Google in chrome', ()=> {
    let browser;
    let page;
    beforeAll(async () => {
        browser = await chromium.launch({headless: false});
        page = await browser.newPage();
    });

    afterEach(async () => {
        await browser.close();
    })

    test('should display correct browser', async () => {
        await page.goto('https://www.google.com/');
        expect(await page.waitForSelector('img[alt= "Google"]')).toBeTruthy();
    })
}) ;
