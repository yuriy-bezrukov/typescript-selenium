import { Builder, WebDriver, Capabilities, By } from "selenium-webdriver";

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require("chromedriver");
const assert: IAssert = require("assert");

let capabilities = Capabilities.chrome();

capabilities.set("goog:chromeOptions", {
  args: [
    "--lang=en",
    "disable-infobars",
    "--disable-plugins",
    // "--headless"
  ]
});

xdescribe("BAD - Login form", function () {
  let driver: WebDriver;

  before(async function () {
    driver = await new Builder().withCapabilities(capabilities).build();
  });

  xit("Clear button function", async function () {
    await driver.get('http://lab2.webtm.ru');
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click()
    await driver.sleep(1000);

    (await driver.findElement(By.css('md-tab-item:nth-child(2)'))).click();
    await driver.sleep(500);

    (await driver.findElement(By.css('[ng-model="ctrl.unit.hour"] option[value="09"]'))).click();
    (await driver.findElement(By.css('[ng-model="ctrl.unit.minute"] option[value="30"]'))).click();
    driver.findElement(By.css('[ng-model="ctrl.unit.name"]')).sendKeys('Ivan');
    driver.findElement(By.css('[ng-model="ctrl.unit.fam"]')).sendKeys('Ivanov');
    driver.findElement(By.css('[ng-model="ctrl.unit.birthday.day"]')).sendKeys('12');
    driver.findElement(By.css('[ng-model="ctrl.unit.birthday.mounth"]')).sendKeys('2');
    driver.findElement(By.css('[ng-model="ctrl.unit.birthday.year"]')).sendKeys('2012');
    driver.findElement(By.css('[ng-model="ctrl.unit.phone1"]')).sendKeys('89081179555');

    (await driver.findElement(By.css('[ng-click="ctrl.clear()"]'))).click();
    await driver.sleep(500);

    let phone = await (await driver.findElement(By.css('[ng-model="ctrl.unit.phone1"]'))).getText();
    await assert.equal(phone, '');
  });

  xit('Disable Add client button withour select Date', async function () {
    await driver.get('http://lab2.webtm.ru');
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click()
    await driver.sleep(1000);

    (await driver.findElement(By.css('md-tab-item:nth-child(2)'))).click();
    await driver.sleep(500);
    let addClientButton = driver.findElement(By.css('[ng-click="ctrl.save()"]'));
    let exitAddClientButton = addClientButton.then(() => true, () => false);
    await assert.equal(await exitAddClientButton, false);
  });

  xit('Enable Add client button withour select Date', async function () {
    await driver.get('http://lab2.webtm.ru');
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click()
    await driver.sleep(1000);

    (await driver.findElement(By.css('md-tab-item:nth-child(2)'))).click();
    await driver.sleep(500);
    (await driver.findElement(By.css('[ng-model="ctrl.unit.hour"] option[value="09"]'))).click();
    (await driver.findElement(By.css('[ng-model="ctrl.unit.minute"] option[value="30"]'))).click();
    await driver.sleep(100);
    let addClientButton = driver.findElement(By.css('[ng-click="ctrl.save()"]'));
    let exitAddClientButton = addClientButton.then(() => true, () => false);

    await assert.equal(await exitAddClientButton, true);
  });

  after(() => driver && driver.quit());
});
