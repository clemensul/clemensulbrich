import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('I´m Clemens Ulbrich');
  });

  it('should display linkedin button with capitals', () => {
    page.navigateTo();
    expect(page.getButtonText('linkedin')).toEqual('LINKEDIN');
  });

  it('should display instagram button with capitals', () => {
    page.navigateTo();
    expect(page.getButtonText('instagram')).toEqual('INSTAGRAM');
  });

  it('should display twitter button with capitals', () => {
    page.navigateTo();
    expect(page.getButtonText('twitter')).toEqual('TWITTER');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
