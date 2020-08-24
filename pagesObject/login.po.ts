import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class LoginPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);
    private find = (cssPath: string) => { 
        return this.browser.findElement(By.css(cssPath));
    }

    email = () => this.find('[ng-model="ctrl.email"]');
    password = () => this.find('[type="password"]');
    submit = () => this.find('[type="button"]');

    // isPage() {
    //     let blockOnLoginPage = this.find('login-access-component');
    //     return this.seleniumUtils.existElement(blockOnLoginPage);
    // }

    async waitAuthorization() {
        return await this.seleniumUtils.wait('[ng-click="exit()"]');
    } 
}