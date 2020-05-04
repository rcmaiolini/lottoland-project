import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/footer/Footer.vue'
import Trust from '@/components/footer/Trust.vue'
import Signs from '@/components/footer/Signs.vue'
import Payments from '@/components/footer/Payments.vue'
import Links from '@/components/footer/Links.vue'
import Download from '@/components/footer/Download.vue'

describe('Footer', () => {
  it('renders Footer and does initialize all components', () => {
    const wrapper = shallowMount(Footer)

    expect(wrapper.find(Trust).exists()).toBe(true)
    expect(wrapper.find(Signs).exists()).toBe(true)
    expect(wrapper.find(Payments).exists()).toBe(true)
    expect(wrapper.find(Links).exists()).toBe(true)
    expect(wrapper.find(Download).exists()).toBe(true)
  })
})
