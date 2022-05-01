// Test Cases for Visual Testing.
import { test, expect } from '@playwright/test';

test.describe('Visual Testing', () => {

  test('Visual Testing', async ({ page }) => {

    //await page.goto('https://www.google.com',{waitUntil:'networkidle'})
    await page.goto('https://react-redux.realworld.io/', { waitUntil: 'networkidle' })
    expect(await page.screenshot()).toMatchSnapshot();
    // For specifiying max difference pixels.
    //  expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixels: 100 });});
    // Wait for 6 seconds for demo.
    await page.waitForTimeout(6000);
  })

})
