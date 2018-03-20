import { SimpsonPage } from './app.po';

describe('simpson App', function() {
  let page: SimpsonPage;

  beforeEach(() => {
    page = new SimpsonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
