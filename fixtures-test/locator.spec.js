import {test, expect} from '@playwright/test'

test.describe('Locator single', async () => {
  test('example', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')
    // await page.locator('[id="login2"]').click()
    await page.click('[id="login2"]')

    await page.locator('[id="loginusername"]').fill('Admin')
    // await page.fill('[id="loginusername"]', 'Admin')
    // await page.type('[id="loginusername"]', 'Admin')

    await page.fill('[id="loginpassword"]', 'admin')
    await page.click('button:has-text("Log in")')
    const logOutLink = await page.locator('a:has-text("Log out")')
    await expect(logOutLink).toBeVisible()
   // await page.pause(2000)
  })


  test('Multiple elements', async ({page}) => {
    await page.goto('https://www.demoblaze.com/index.html')

    await page.waitForSelector('//div[@id="tbodyid"]//div//h4/a')

    const links = await page.$$('//div[@id="tbodyid"]//div//h4/a')
    for (const link of links){
      const linkName = await link.textContent()
      console.log(linkName)
    }
  })
})