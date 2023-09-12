import {test, expect} from '@playwright/test'
import LoginPage from '../pages/login'

test.describe('Authentication & Authorization', () => {
  let loginPage

  test.beforeEach(async ({page}) => {
    //await page.goto('/user/login')
    loginPage = new LoginPage(page)
    await loginPage.open()
  })

  test('Sign in with existing credentials', async ({page}) => {
    await loginPage.inputEmail.fill(process.env.EMAIL)
    await loginPage.inputPassword.fill(process.env.PASSWORD)
    await loginPage.buttonSubmit.click()

    await expect(page.locator('.ant-avatar-square')).toBeVisible()
  })

  test('Sign in with not existing credentials', async ({page}) => {
    await loginPage.inputEmail.fill('invalid@gmail.com')
    await loginPage.inputPassword.fill('invalid')
    await loginPage.buttonSubmit.click()

    await expect(loginPage.toast).toBeVisible()
    await expect(loginPage.toast).toHaveText('User login. Fail')
  })
})
