// Test Cases for Reuse Authentication.
import { test, expect } from '@playwright/test';

test.use({ storageState: './storage/standard.json' })
test.describe('Reuse Authentication State', () => {

  test('TC001-React Page @reuse', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    const pageHeader = await page.locator(`a.navbar-brand`).innerText()
    expect(pageHeader).toBe('conduit')
    await page.waitForTimeout(6000);
  })

  test('TC002-React Page @reuse', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    const pageHeader = await page.locator(`a.navbar-brand`).innerText()
    expect(pageHeader).toBe('conduit')
    await page.waitForTimeout(6000);
  })

})
