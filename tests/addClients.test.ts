import { Builder, WebDriver, Capabilities, By } from "selenium-webdriver";
import { LoginPage } from "../pagesObject/login.po";
import { AddClientPage } from "../pagesObject/addClientPage";
import { App } from "../pagesObject/config.po";
import { SeleniumUtils } from "../utils/se.utils";

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

describe("Login form", function () {
  let driver: WebDriver;
  let page: AddClientPage;

  before(async function () {
    driver = await new Builder().withCapabilities(capabilities).build();
    page = new AddClientPage();
  });

  it("simple Selenium test", async function () {
    await signIn();
    (await driver.findElement(By.css(page.selectors.tab))).click();
    await driver.sleep(1000);

    driver.findElement(By.css(page.selectors.firstName)).sendKeys('Ivan');
    driver.findElement(By.css(page.selectors.lastName)).sendKeys('Ivanov');
    driver.findElement(By.css(page.selectors.birthday.day)).sendKeys('12');
    driver.findElement(By.css(page.selectors.birthday.mounth)).sendKeys('2');
    driver.findElement(By.css(page.selectors.birthday.year)).sendKeys('2012');
    driver.findElement(By.css(page.selectors.phone1)).sendKeys('89081179555');

    let blockOnLoginPage = driver.findElement(By.css(page.selectors.btnClear));
    let isExist = await blockOnLoginPage.then(()=> true, ()=> false);
    await signOut();
    await assert.equal(isExist, false);
  });

  async function signIn() {
    await driver.get('http://dev2.lab-27.ru');
    await driver.sleep(3000);
    driver.findElement(By.css('[ng-model="ctrl.email"]')).sendKeys('w@w.w');
    driver.findElement(By.css('[ng-model="ctrl.password"]')).sendKeys('w');
    (await driver.findElement(By.css('[type="button"]'))).click()
    await driver.sleep(3000);
  }

  async function signOut() {
    (await driver.findElement(By.css('[ng-click="exit()"]'))).click()
  }

  after(() => driver && driver.quit());
});
