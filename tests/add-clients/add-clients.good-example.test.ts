import { Builder, WebDriver } from 'selenium-webdriver';
import { getChromeCapabilities } from '../../selenium.config';
import { LoginPage } from '../../pagesObject/login.po';
import { AddClientPage } from '../../pagesObject/addClientPage';
import { app } from '../../pagesObject/config.po';

interface IAssert {
  equal: (actual: Object, expected: Object) => void;
}

require('chromedriver');
const assert: IAssert = require('assert');

xdescribe('GOOD - Login form', function () {
  let driver: WebDriver;
  let page: AddClientPage;
  let loginPage: LoginPage;

  before(async function () {
    driver = await new Builder().withCapabilities(getChromeCapabilities()).build();
    page = new AddClientPage(driver);
    loginPage = new LoginPage(driver);

    await driver.get(app.url);
    loginPage.email().sendKeys(app.user.login);
    loginPage.password().sendKeys(app.user.login);
    (await loginPage.submit()).click();
    await loginPage.waitAuthorization();

    (await page.tab()).click();
  });

  xit('Clear button function', async function () {
    await driver.sleep(1000);

    await page.setClock('08', '30');
    page.firstName().sendKeys('Ivan');
    page.lastName().sendKeys('Ivanov');
    page.birthday.day().sendKeys('12');
    page.birthday.mounth().sendKeys('2');
    page.birthday.year().sendKeys('2012');
    page.phone1().sendKeys('89081179555');

    (await page.btnClear()).click();
    await driver.sleep(500);

    let phone = await (await page.phone1()).getText();
    await assert.equal(phone, '');
  });


  xit('Disable Add client button withour select Date', async function () {
    let exisSavetButton = page.btnSave().then(() => true, () => false);
    await assert.equal(await exisSavetButton, false);
  });

  xit('Enable Add client button withour select Date', async function () {
    page.setClock('11', '30');
    await driver.sleep(100);
    let exisSavetButton = page.btnSave().then(() => true, () => false);
    await assert.equal(await exisSavetButton, false);
  });


  after(() => driver && driver.quit());
});
