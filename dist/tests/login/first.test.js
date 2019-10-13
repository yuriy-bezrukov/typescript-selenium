"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const login_po_1 = require("../../pagesObject/login.po");
const calendar_po_1 = require("../../pagesObject//calendar.po");
const config_po_1 = require("../../pagesObject/config.po");
const se_utils_1 = require("../../utils/se.utils");
require('chromedriver');
const assert = require('assert');
let capabilities = selenium_webdriver_1.Capabilities.chrome();
capabilities.set("goog:chromeOptions", {
    args: [
        "--lang=en",
        "disable-infobars",
        "--disable-plugins",
    ]
});
describe('Login form', function () {
    let driver;
    let page;
    let calendarPage;
    let browser;
    before(function () {
        return __awaiter(this, void 0, void 0, function* () {
            driver = yield new selenium_webdriver_1.Builder().withCapabilities(capabilities).build();
            page = new login_po_1.LoginPage(driver);
            calendarPage = new calendar_po_1.CalendarPage(driver);
            browser = new se_utils_1.SeleniumUtils(driver);
        });
    });
    it('Positive test', function () {
        return __awaiter(this, void 0, void 0, function* () {
            browser.go(config_po_1.App.url);
            yield page.isLoad();
            yield browser.keys(page.email(), config_po_1.App.user.login);
            yield browser.keys(page.password(), config_po_1.App.user.password);
            yield browser.click(page.submit());
            yield calendarPage.isLoad();
            yield assert.equal(yield calendarPage.isPage(), true);
        });
    });
    after(() => driver && driver.quit());
});
