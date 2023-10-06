import {test, chromium} from '@playwright/test'


test('without fixtures', async () => {
  const browser = await chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()
  await page.goto('https://www.google.com')

  console.log(await context.cookies())
  console.log('=================')
  await context.clearCookies()
  console.log(await context.cookies())

  const context2 = await browser.newContext()
  const page2 = await context2.newPage()
  await page2.goto('https://www.localcoding.us')

  const request = await page.request.get('https://jsonplaceholder.typicode.com/todos/1')
  const response = await request.json()
  console.log(response)
  console.log(await browser._name)

})

test.only('with fixtures', async ({page, context, browser, request, browserName}) => {
  await page.goto('https://www.google.com')

  console.log(await context.cookies())
  console.log('=================')
  await context.clearCookies()
  console.log(await context.cookies())

  const context2 = await browser.newContext()
  const page2 = await context2.newPage()
  await page2.goto('https://www.localcoding.us')

  const req = await request.get('https://jsonplaceholder.typicode.com/todos/1')
  const response = await req.json()
  console.log(response)
  console.log(await browserName)

})