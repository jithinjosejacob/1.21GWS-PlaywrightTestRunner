// mobile.config.js

const { devices } = require('@playwright/test');

module.exports = {
    timeout: 40000,
    workers: 1,
    reportSlowTests: null,
    /* Configure projects for major browsers */
    projects: [
        // iPhone 13 Pro Max tests use WebKit browser.
        {
            name: 'iPhone13ProMax',
            use: {
                browserName: 'webkit',
                headless: false,
                ...devices['iPhone 13 Pro Max'],
            },
        },

        // Pixel5 tests use Chromium browser.
        {
            name: 'Pixel5',
            use: {
                browserName: 'chromium',
                channel: 'chrome',
                headless: false,
                ...devices['Pixel 5 landscape'],
            },
        },
    ]
};
