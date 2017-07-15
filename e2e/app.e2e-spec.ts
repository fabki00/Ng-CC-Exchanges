import { NgCCExchangesPage } from './app.po';

describe('ng-cc-exchanges App', () => {
  let page: NgCCExchangesPage;

  beforeEach(() => {
    page = new NgCCExchangesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
