import {test} from '@playwright/test'

test('Auth cookies', async ({browser}) => {
  const context = await browser.newContext({
    storageState: './auth.json'
  })
  const page = await context.newPage()
  await page.goto('localcoding.us')
  await page.waitForTimeout(5000)
})