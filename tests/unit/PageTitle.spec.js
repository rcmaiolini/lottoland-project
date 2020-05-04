import { mount } from '@vue/test-utils'
import PageTitle from '@/components/common/PageTitle.vue'

describe('PageTitle', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(PageTitle, {
      propsData: {
        title: 'Some Page Title'
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('must render props.title when passed', () => {
    const titleValue = 'Some Page Title'
    const wrapper = mount(PageTitle, {
      propsData: {
        title: titleValue
      }
    })
    expect(wrapper.html()).toContain(titleValue)
    expect(wrapper.props().title).toBe(titleValue)
  })
})
