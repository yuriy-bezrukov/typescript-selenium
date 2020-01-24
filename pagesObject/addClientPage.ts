export class AddClientPage {

    selectors = {
        tab: 'md-pagination-wrapper>md-tab-item:nth-child(2)',
        clock: {
            hour: '[ng-model="ctrl.unit.hour"]',
            minuts: '[ng-model="ctrl.unit.minute"]',
        },
        lastName: '[ng-model="ctrl.unit.fam"]',
        firstName: '[ng-model="ctrl.unit.name"]',
        birthday: {
            day: '[ng-model="ctrl.unit.birthday.day"]',
            mounth: '[ng-model="ctrl.unit.birthday.mounth"]',
            year: '[ng-model="ctrl.unit.birthday.year"]'
        },
        phone1: '[ng-model="ctrl.unit.phone1"]',
        btnClear: '[ng-click="ctrl.clear()"]',
        btnSave: '[ng-click="ctrl.save()"]'
    };

}
