// global-setup.ts
import { Browser, chromium, FullConfig } from '@playwright/test'

async function globalSetup(config: FullConfig) {
    const browser = await chromium.launch({
        headless:false //true // false
    })
    await saveStorage(browser, 'testchamps@gmail.com', 'test123', 'storage/standard.json')
    await browser.close()
}

async function saveStorage(browser: Browser, userName: string, password: string, saveStoragePath: string) {
    const page = await browser.newPage()
    await page.goto('https://react-redux.realworld.io/#/login')
    await page.fill(`//input[@placeholder='Email']`, userName)
    await page.fill(`//input[@placeholder='Password']`, password)
    await page.click(`//button[contains(text(),'Sign in')]`)
    await page.waitForNavigation()
    await page.click(`//a[contains(text(),'Global Feed')]`)
    await page.context().storageState({ path: saveStoragePath })
    console.log('Ran Global Setup')
}

export default globalSetup
