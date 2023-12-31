import {test, expect} from '../common/test'
import {logInWithApi} from '../common/log-in-with-api'

test.describe('Delivery', () => {
  test('Save city information', async ({page, request, context, deliveryPage}) => {
    await logInWithApi(page, request, context, process.env.EMAIL, process.env.PASSWORD)
    await request.patch(`${process.env.API_BASE_URL}/user/shipping`, {
      data: {
        fullName: '',
        countryName: 'United States',
        state: null,
        address: null,
        city: '',
        contactPhone: '',
        countryCode: '1',
        zipCode: null,
      },
      headers: {
        'Cookie': process.env.COOKIE.split('\n')
      }
    })
    await deliveryPage.open()

    await deliveryPage.input.city.type('Los Angeles')
    const responsePromise = page.waitForResponse(
      response =>
      response.url() === `${process.env.API_BASE_URL}/user/shipping` &&
      response.request().method() === 'PATCH'
    )
    await deliveryPage.button.save.click()

    expect((await responsePromise).status()).toEqual(200)
    await page.reload()
    expect(deliveryPage.input.city).toHaveValue('Los Angeles')
  })
})
