export class SecondProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('second-project-app h1')).getText();
  }
}
