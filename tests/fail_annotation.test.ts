// Test Cases for Fail Annotation.
import { test, expect } from '@playwright/test';

test.describe('Reuse Authentication State', () => {

  test('TC003- Fail Annotation', async ({ page }) => {
    test.fail();
    await page.goto('https://react-redux.realworld.io/')
    const pageTitle = await page.title()
    expect(pageTitle).toBe('Conduit')
    await page.waitForTimeout(6000);
  })
})
