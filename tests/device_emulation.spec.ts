// Test Cases for Device Emulation.
import { test, expect } from '@playwright/test';

test.describe('Device Emulation tests', () => {
  test('Cross browser test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const pageTitle = await page.locator(`//title`).innerText()
    expect(pageTitle).toBe('Swag Labs')
    // Wait for 5 seconds for demo
    await page.waitForTimeout(5000);
  });

})
