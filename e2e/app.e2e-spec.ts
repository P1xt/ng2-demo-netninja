import { Ng2DemoNetninjaPage } from './app.po';

describe('ng2-demo-netninja App', function() {
  let page: Ng2DemoNetninjaPage;

  beforeEach(() => {
    page = new Ng2DemoNetninjaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
