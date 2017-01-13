import { BingoPage } from './app.po';

describe('bingo App', function() {
  let page: BingoPage;

  beforeEach(() => {
    page = new BingoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
