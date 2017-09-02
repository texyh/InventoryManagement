import { InventoryManagementPage } from './app.po';

describe('inventory-management App', () => {
  let page: InventoryManagementPage;

  beforeEach(() => {
    page = new InventoryManagementPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
