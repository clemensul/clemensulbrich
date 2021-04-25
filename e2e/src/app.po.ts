import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<void> {
    return browser.get(browser.baseUrl) as Promise<void>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h1')).getText() as Promise<string>;
  }

  getButtonText(id: string): Promise<string> {
    return element(by.css(`#${id}`)).getText() as Promise<string>;
  }

  getTextTransformCSSProperty(id: string): Promise<string> {
    return element(by.css(`#${id}`)).getCssValue(
      'text-transform'
    ) as Promise<string>;
  }
}
