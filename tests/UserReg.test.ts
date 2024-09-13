import { test, expect } from "@playwright/test";
test.use({
  viewport: {
    height: 600,
    width: 800,
  },
});

test("UserReg test", async ({ page }) => {
  await page.goto("https://192.168.1.33:4442/home/my-apps");
  await page.getByPlaceholder("Enter username").click();
  await page.getByPlaceholder("Enter username").fill("Admin");
  await page.getByPlaceholder("Enter password").click();
  await page.getByPlaceholder("Enter password").fill("Admin@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'User Registration' }).click();
  await page.getByRole('button', { name: 'Create User' }).click();
  await page.getByPlaceholder('Enter Username').click();
  await page.getByPlaceholder('Enter Username').fill('Test_User_01');
  await page.getByPlaceholder('Enter full name').click();
  await page.getByPlaceholder('Enter full name').fill('Madhavi');
  await page.getByPlaceholder('Enter email').click();
  await page.getByPlaceholder('Enter email').fill('madhavi.m@dhruvts.com');
  await page.getByPlaceholder('Select Status...').click();
  await page.locator("//a[@aria-label='Active']").click();
  await page.getByPlaceholder('Choose a role...').click();
  await page.locator("//a[@aria-label='BL_Import']").click();
  await page.getByPlaceholder('Choose a domain...').click();
  await page.locator("//a[@aria-label='Dhruv-AD']").click(); 
  await page.locator("//button[@id='add-domain-btn']").click();
  await page.getByPlaceholder('Choose an app...').click();
  await page.locator("//a[@aria-label='Batch Loader']").click();
  await page.getByPlaceholder('Choose a server...').click();
  await page.locator("//a[@id='serverId-item-0']").click();
  await page.locator("//button[@id='add-appServer-btn']").click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'View Users' }).click();
  await page.getByPlaceholder('Choose an user...').click();
  await page.getByPlaceholder('Choose an user...').fill('Test_User_01');
  await page.locator("//a[@id='userId-item-0']").click();
  await page.getByPlaceholder('Enter Username').click();
  await page.getByPlaceholder('Enter Username').fill('Test_User_02');
  await page.getByRole("button", { name: "Update" }).click();
  await page.getByRole('button', { name: 'View Users' }).click();
  await page.getByPlaceholder('Choose an user...').click();
  await page.getByPlaceholder('Choose an user...').fill('Test_User_02');
  await page.locator("//a[@aria-label='Test_User_02']").click();
  await page.getByRole("button", { name: "Delete User" }).click();
  await page.getByRole('button', { name: 'Yes' }).click({timeout: 10000});
 });