import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://192.168.1.33:4442/');
  await page.getByPlaceholder('Enter username').click();
  await page.getByPlaceholder('Enter username').fill('Admin');
  await page.getByPlaceholder('Enter password').click();
  await page.getByPlaceholder('Enter password').fill('Admin@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator("text=Environment Configuration").click();
  await page.getByRole('button', { name: 'Create Environment' }).click();
  await page.getByPlaceholder('Enter environment name').click();
  await page.getByPlaceholder('Enter environment name').fill('test');
  await page.getByLabel('Environment Color').click();
  await page.locator('form').getByRole('button').click();
  await page.getByTitle('#F8E71C').click();
  await page.getByRole('button', { name: 'Submit' }).click();
});