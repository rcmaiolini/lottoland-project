import { mount } from '@vue/test-utils'
import PageTitle from '@/components/common/PageTitle.vue'

describe('PageTitle', () => {
  let wrapper
  beforeAll(() => {
    wrapper = mount(PageTitle)
  })

  it('is a Vue instance', () => {
    wrapper.setProps({
      title: 'Some Page Title'
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('must render props.title when passed', () => {
    const titleValue = 'Some Page Title'
    wrapper.setProps({
      title: titleValue
    })
    expect(wrapper.html()).toContain(titleValue)
    expect(wrapper.vm.title).toBe(titleValue)
  })
})
