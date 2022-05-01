// Test Cases for debugger.
import { test } from '@playwright/test';

test.use({ storageState: './storage/standard.json' })
test.describe('Debugger', () => {

  test('Debugger', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    await page.click(`//a[contains(text(),'Global Feed')]`)
    await page.click(`//a[contains(text(),'New Post')]`)
    await page.click(`//a[contains(text(),'Settings')]`)
    // Wait for 6 seconds for demo.
    await page.waitForTimeout(6000);
  })

})
