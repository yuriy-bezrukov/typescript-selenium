import { WebDriver, By } from "selenium-webdriver";
import { SeleniumUtils } from "../utils/se.utils";

export class CalendarPage {
    constructor(private browser: WebDriver) { }

    private seleniumUtils = new SeleniumUtils(this.browser);

    private find = (cssPath: string) => { 
        return this.browser.findElement(By.css(cssPath));
    }

    buttonExit = () => this.find('[ng-click="exit()"]');

    isPage() {
        let blockOnLoginPage = this.find('calendar-component');
        return this.seleniumUtils.existElement(blockOnLoginPage);
    }
    
    isLoad = () => this.seleniumUtils.wait('calendar-component');
}