import { test, expect } from "@playwright/test";
test.use({
  viewport: {
    height: 600,
    width: 800,
  },
});

test("Delete Role Test", async ({ page }) => {
  await page.goto("https://192.168.1.33:4442/home/my-apps");
  await page.getByPlaceholder("Enter username").click();
  await page.getByPlaceholder("Enter username").fill("Admin");
  await page.getByPlaceholder("Enter password").click();
  await page.getByPlaceholder("Enter password").fill("Admin@123");
  await page.getByRole("button", { name: "Login" }).click();
  await page.getByRole("button", { name: "Roles Icon User Role" }).click();
  await page.getByRole("button", { name: "Create User Role" }).click();
  await page.getByPlaceholder("Enter role name").click();
  await page.getByPlaceholder("Enter role name").fill("test42");
  await page.getByPlaceholder("Choose an app...").click();
  await page.getByLabel("Batch Loader").click();
  await page.getByRole("button", { name: "Add" }).click();
  await page.locator("#delete-user-btn").first().click();
  await page.locator("#select-all-checkbox").check();
  await page.getByRole("button", { name: "Save" }).click();
  await page.getByRole("button", { name: "Submit" }).click();
  await page.getByRole("button", { name: "View User Roles" }).click();
  await page.getByPlaceholder("Choose a role...").click();
  await page.getByPlaceholder("Choose a role...").fill("test42");
  await page.getByLabel("test42").click();
  await page.getByPlaceholder("Enter role name").click();
  await page.getByPlaceholder("Enter role name").fill("test43");
  await page.getByRole("button", { name: "Update" }).click();
  //await page.waitForTimeout(3000);
  await page.getByPlaceholder("Choose a role...").click();
  await page.getByPlaceholder("Choose a role...").fill("test");
  //await page.waitForTimeout(3000);
  await page.getByLabel("test43").click();

  await page.getByRole("button", { name: "Delete Role" }).click();
 
  await page.getByRole('button', { name: 'Yes' }).click({timeout: 10000});
});
