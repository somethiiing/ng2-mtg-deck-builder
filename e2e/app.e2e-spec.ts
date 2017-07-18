import { Ng2MtgDeckBuilderPage } from './app.po';

describe('ng2-mtg-deck-builder App', () => {
  let page: Ng2MtgDeckBuilderPage;

  beforeEach(() => {
    page = new Ng2MtgDeckBuilderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
