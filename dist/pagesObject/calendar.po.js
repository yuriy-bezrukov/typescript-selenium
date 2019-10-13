"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const se_utils_1 = require("../utils/se.utils");
class CalendarPage {
    constructor(browser) {
        this.browser = browser;
        this.seleniumUtils = new se_utils_1.SeleniumUtils(this.browser);
        this.find = (cssPath) => {
            return this.browser.findElement(selenium_webdriver_1.By.css(cssPath));
        };
        this.isLoad = () => this.seleniumUtils.wait('calendar-component');
    }
    isPage() {
        let blockOnLoginPage = this.find('calendar-component');
        return this.seleniumUtils.existElement(blockOnLoginPage);
    }
}
exports.CalendarPage = CalendarPage;
