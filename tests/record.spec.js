import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('stabdard_user');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').press('ArrowLeft');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('seret_sauce');
  await page.locator('[data-test="password"]').press('Enter');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});