// Test Cases for Device Emulation.
import { test, expect } from '@playwright/test';

test.describe('Device Emulation test', () => {

  test('Device Emulation test', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    const pageTitle = await page.title()
    expect.soft(pageTitle).toBe('Conduit')
    expect(pageTitle).toBe('Conduit')
    // Wait for 5 seconds for demo.
    await page.waitForTimeout(5000);
  })

})
