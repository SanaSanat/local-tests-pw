import {test as baseTest} from '@playwright/test'
type myName = {
  name: string
}

const fixture = baseTest.extend<myName>({
  name: 'Sana'
})
export const it = fixture
export const expect = fixture.expect