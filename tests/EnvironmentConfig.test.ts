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
  await page.getByRole('button', { name: 'About-Us IconEnvironment' }).click();
  await page.getByRole('button', { name: 'Create Environment' }).click();
  await page.getByPlaceholder('Enter environment name').click();
  await page.getByPlaceholder('Enter environment name').fill('Environment_10');
  await page.getByLabel('Environment Color*').click();
  await page.locator("//button[@class='ms-2 btn btn-primary btn-sm']").click();
  await page.getByTitle("#ffffff").click();
  await page.getByRole('button', { name: 'Submit'}).click();
  await page.getByRole('button', { name: 'View Environment'}).click();
  await page.locator("//input[@id='txt-search-filter']").click();
  await page.locator("//input[@id='txt-search-filter']").fill('Environment_10');
  await page.getByRole('row', { name: 'Environment_10' }).getByRole('button').nth(1).click();
  await page.getByTitle("#F5A623").click();
  await page.getByRole('button', { name: 'Save' }).click();
  //await page.locator("//input[@id='txt-search-filter']").click();
  // await page.locator("//input[@id='txt-search-filter']").fill('Environment_10');
  // await page.getByRole('row', { name: 'Environment_10' }).getByRole('button').nth(2).click();
  // await page.getByRole('button', { name: 'Yes' }).click();

});