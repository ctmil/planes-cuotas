import { PlanesCuotasPage } from './app.po';

describe('planes-cuotas App', function() {
  let page: PlanesCuotasPage;

  beforeEach(() => {
    page = new PlanesCuotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
