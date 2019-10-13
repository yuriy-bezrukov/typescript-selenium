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
class SeleniumUtils {
    constructor(browser) {
        this.browser = browser;
    }
    selectOptions(el, number) {
    }
    sleep(timeout = 2000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.sleep(timeout);
        });
    }
    go(url) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.get(url);
        });
    }
    existElement(el) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield el.then(() => true, () => false);
        });
    }
    click(el) {
        return el.click();
    }
    keys(el, keys) {
        return el.sendKeys(keys);
    }
    wait(cssPath, timeout = 10000) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.browser.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css(cssPath)), timeout);
        });
    }
}
exports.SeleniumUtils = SeleniumUtils;
