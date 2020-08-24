import { Capabilities } from 'selenium-webdriver';

export function getChromeCapabilities() {
    const capabilities = Capabilities.chrome();

    capabilities.set('goog:chromeOptions', {
        args: [
            '--lang=en',
            'disable-infobars',
            '--disable-plugins',
            // '--headless'
        ]
    });
    return capabilities;
}