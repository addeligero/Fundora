import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import LandingPage from '../views/LandingPage.vue'

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(LandingPage)
    expect(wrapper.text()).toContain('Every loan.')
    expect(wrapper.text()).toContain('Administrator')
  })
})
