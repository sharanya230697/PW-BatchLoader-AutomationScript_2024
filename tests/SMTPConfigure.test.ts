import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 600,
    width: 800
  }
});

test('test', async ({ page }) => {

  await page.goto('https://192.168.1.33:4442/home/my-apps');
  //await page.goto('https://192.168.1.33:4442/');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('Admin');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Admin@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'SMTP Configuration' }).click();
  await page.getByRole('button', { name: 'Create SMTP' }).click();
  await page.getByPlaceholder('Enter Email').click();
  await page.getByPlaceholder('Enter Email').fill('mailus@dhruvts.com');
  await page.getByPlaceholder('Enter SMTP Server name').click();
  await page.getByPlaceholder('Enter SMTP Server name').fill('smtp.office365.com');
  await page.getByPlaceholder('enter password').click();
  await page.getByPlaceholder('enter password').fill('N@ru+0$@g3_5asK3');
  await page.getByPlaceholder('Enter ssl Port').click();
  await page.getByPlaceholder('Enter ssl Port').fill('587');
  await page.getByPlaceholder('Select an option').click();
  await page.locator("//a[@id='select-type-item-0']").click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'View SMTP' }).click();
  await page.locator('#edit-smtp-btn').click();
  await page.locator("//input[@class='rbt-input-main form-control rbt-input']").click();
//   await page.locator("input[value='Active']").scrollIntoViewIfNeeded();
//   await page.locator("input[value='Active']").click();
//   await page.locator("a[aria-label='Inactive']").hover();
   await page.locator("a[aria-label='Inactive']").click();
   await page.getByRole('button', { name: 'Update' }).click();
   await page.locator('#delete-smtp-btn').click();
   await page.getByRole('button', { name: 'Yes' }).click();


});