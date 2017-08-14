import { OshopPage } from './app.po';

describe('oshop App', () => {
  let page: OshopPage;

  beforeEach(() => {
    page = new OshopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
