import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://192.168.1.33:4442/");
  await page.waitForTimeout(5000);
  await page.getByPlaceholder("Enter username").click();
  await page.getByPlaceholder("Enter username").fill("Admin");
  await page.waitForTimeout(3000);
  //await page.waitForSelector(5000);
  await page.getByPlaceholder("Enter password").click();
  await page.getByPlaceholder("Enter password").fill("Admin@123");
  await page.getByRole("button", { name: "Login" }).click();
});
