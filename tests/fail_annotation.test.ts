// Test Cases for Fail Annotation.
import { test, expect } from '@playwright/test';

test.describe('Fail Annotation', () => {

  // test.skip -for skipping tests.
  // test.only - for running that specific test.
  test('Fail Annotation', async ({ page }) => {
    test.fail(); // Bug123 yet to be fixed.
    await page.goto('https://react-redux.realworld.io/')
    const pageTitle = await page.title()
    // Actual Result - Conduit
    //expect(pageTitle).toBe('Conduit')
    expect(pageTitle).toBe('Redux')
    // Wait for 6 seconds for demo.
    await page.waitForTimeout(6000);
  })

})
