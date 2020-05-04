import { shallowMount } from '@vue/test-utils'
import Header from '@/components/header/Header.vue'
import Top from '@/components/header/Top.vue'
import Nav from '@/components/header/Nav.vue'

describe('Header', () => {
  it('renders Header and does initialize all components', () => {
    const wrapper = shallowMount(Header)

    expect(wrapper.find(Nav).exists()).toBe(true)
    expect(wrapper.find(Top).exists()).toBe(true)
  })
})
