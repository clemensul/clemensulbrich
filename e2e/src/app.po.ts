import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getButtonText(id: string) {
    return element(by.css(`#${id}`)).getText() as Promise<string>;
  }
}
