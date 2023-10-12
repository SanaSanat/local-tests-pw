import {test, expect} from '@playwright/test'

  let context;
  let page;
  test.beforeAll(async ({browser})=>{
    context = await browser.newContext();

    await context.tracing.start({
      snapshots: true,
      screenshots: true
    })
    page = await context.newPage()
  })
  test.afterAll(async ()=>{
    await context.tracing.stop({path:'test2_trace.zip'})
  })

test('Demo-trace', async () => {
 // await context.tracing.start({snapshots: true, screenshots: true})
  await page.goto('https://www.saucedemo.com')
  await page.locator('[data-test="username"]').click()
  await page.locator('[data-test="username"]').fill('standard_user')
  await page.locator('[data-test="password"]').click()
  await page.locator('[data-test="password"]').fill('secret_sauce')
  await page.locator('[data-test="login-button"]').click()
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')

  await page.locator('text=Open Menu1').click()
  await page.locator('text=Logout').click()
  await expect(page).toHaveURL('https://www.saucedemo.com')
 // await context.tracing.stop({path: 'test-trace.zip'})
})