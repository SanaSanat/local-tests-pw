import {test, expect} from '@playwright/test'


test.describe('Assertions', () =>{
  test('Hard assertions', async ({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    await expect(page.locator('.header-logo')).toBeVisible()

    await expect(page.locator('[id="small-searchterms"]')).toBeEnabled()

    await page.locator('[id="gender-male"]').click()
    await expect(page.locator('[id="gender-male"]')).toBeChecked()

    await expect(page.locator('[id="register-button"]')).toHaveAttribute('type', 'submit')
    await expect(page.locator('[id="Password"]')).toHaveAttribute('data-val', 'true')

    await expect(page.locator('h1')).toHaveText('Register')

    await page.locator('[id="Email"]').fill('asa')
    await expect(page.locator('[id="Email"]')).toHaveValue('asa')


  })
})