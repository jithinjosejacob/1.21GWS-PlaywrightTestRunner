// Test Cases for Reuse Authentication - Part 2.
import { test, expect } from '@playwright/test';

test.use({ storageState: './storage/standard.json' })
test.describe('Reuse Authentication State', () => {

  test('TC003-React Page @reuse', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    const pageHeader = await page.locator(`a.navbar-brand`).innerText()
    expect(pageHeader).toBe('conduit')
    // Wait for 6 seconds for demo.
    await page.waitForTimeout(6000);
  })

  test('TC004-React Page @reuse', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    const pageHeader = await page.locator(`a.navbar-brand`).innerText()
    expect(pageHeader).toBe('conduit')
    // Wait for 6 seconds for demo.
    await page.waitForTimeout(6000);
  })

})
