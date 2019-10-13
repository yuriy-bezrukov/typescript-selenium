"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const selenium_webdriver_1 = require("selenium-webdriver");
const se_utils_1 = require("../utils/se.utils");
class LoginPage {
    constructor(browser) {
        this.browser = browser;
        this.seleniumUtils = new se_utils_1.SeleniumUtils(this.browser);
        this.find = (cssPath) => {
            return this.browser.findElement(selenium_webdriver_1.By.css(cssPath));
        };
        this.email = () => this.find('[ng-model="ctrl.email"]');
        this.password = () => this.find('[type="password"]');
        this.submit = () => this.find('[type="button"]');
        this.isLoad = () => this.seleniumUtils.wait('login-access-component');
    }
    isPage() {
        let blockOnLoginPage = this.find('login-access-component');
        return this.seleniumUtils.existElement(blockOnLoginPage);
    }
}
exports.LoginPage = LoginPage;
