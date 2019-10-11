import { By, Builder, Key, until, WebDriver, Capabilities } from "selenium-webdriver";

interface IAssert {
    equal: (actual: Object, expected: Object) => void;
}

require('chromedriver');
const assert: IAssert = require('assert');

let capabilities = Capabilities.chrome();

//Setting chrome options
capabilities.set("goog:chromeOptions", {
  args: [
      "--lang=en",
      "disable-infobars",
      "--disable-plugins",
      "--headless"
  ]
});

describe('Checkout Google.com', function () {
    let driver: WebDriver;

    before(async function() {
        driver = await new Builder().withCapabilities(capabilities).build();
    });

    it('Search on Google', async function() {
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).click();
        await driver.findElement(By.name('q')).sendKeys('brunoyam', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        await driver.findElement(By.name('q')).clear();

        let title = await driver.getTitle();
        assert.equal(title, 'brunoyam - Поиск в Google');              
    });

    it('Search on Google', async function() {
        await driver.get('https://google.com');
        await driver.findElement(By.name('q')).click();
        await driver.findElement(By.name('q')).sendKeys('brunoyam', Key.RETURN);
        await driver.wait(until.elementLocated(By.id('rcnt')), 10000);
        await driver.findElement(By.name('q')).clear();

        let title = await driver.getTitle();
        assert.equal(title, 'brunoyam - Поиск в Google');              
    });

    after(() => driver && driver.quit());
})