import { WebDriver, WebElementPromise, until, By } from 'selenium-webdriver';

export class SeleniumUtils {

    constructor(private browser: WebDriver) {}

    selectOptions(el: WebElementPromise, number: number) {

    }

    async sleep(timeout: number = 2000) {
        await this.browser.sleep(timeout);
    }

    async go(url: string) { 
        await this.browser.get(url);
    }

    async existElement(el: WebElementPromise): Promise<boolean> {
        return await el.then(()=> true, ()=> false);
    }

    click(el: WebElementPromise) {
        return el.click();
    }

     keys(el: WebElementPromise, keys: string) {
        return el.sendKeys(keys);
    }

    async wait(cssPath: string, timeout = 10000) {
        return await this.browser.wait(await until.elementLocated(await By.css(cssPath)), timeout);
    }


}