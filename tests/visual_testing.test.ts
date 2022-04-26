// Test Cases for Visual Testing.
import { test, expect } from '@playwright/test';

test.describe('Visual Testing', () => {

  test('TC004- Visual Testing', async ({ page }) => {
    await page.goto('https://react-redux.realworld.io/')
    await page.waitForSelector(`//a[contains(text(),'welcome')]`)
    expect(await page.screenshot()).toMatchSnapshot();
    await page.waitForTimeout(6000);
  })
})
