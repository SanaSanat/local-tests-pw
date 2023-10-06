import {expect, it} from './myfixtures'

it('myTest', async ({name}, info) => {
  console.log(name.toUpperCase())
  let text = name.toUpperCase()
   expect(text).toBe('SANA')

  console.log('isItPassed ' + info.status)
  console.log(info)
  })