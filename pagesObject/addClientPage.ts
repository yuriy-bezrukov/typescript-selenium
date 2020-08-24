import { WebDriver, By } from 'selenium-webdriver';

export class AddClientPage {

    constructor(private browser: WebDriver) { }

    private find = (cssPath: string) => {
        return this.browser.findElement(By.css(cssPath));
    }

    tab = () => this.find('md-pagination-wrapper>md-tab-item:nth-child(2)')
    clock = {
        hour: '[ng-model="ctrl.unit.hour"]',
        minuts: '[ng-model="ctrl.unit.minute"]'
    };
    lastName = () => this.find('[ng-model="ctrl.unit.fam"]');
    firstName = () => this.find('[ng-model="ctrl.unit.name"]');
    birthday = {
        day: () => this.find('[ng-model="ctrl.unit.birthday.day"]'),
        mounth: () => this.find('[ng-model="ctrl.unit.birthday.mounth"]'),
        year: () => this.find('[ng-model="ctrl.unit.birthday.year"]')
    };
    phone1 = () => this.find('[ng-model="ctrl.unit.phone1"]');
    btnClear = () => this.find('[ng-click="ctrl.clear()"]');
    btnSave = () => this.find('[ng-click="ctrl.save()"]')

    async setClock (hour: string, minute: string) {
        (await this.find(`[ng-model="ctrl.unit.hour"]  option[value="${hour}"]`)).click();
        (await this.find(`[ng-model="ctrl.unit.minute"]  option[value="${minute}"]`)).click();
    };
}
