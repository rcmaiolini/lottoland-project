import { mount } from '@vue/test-utils'
import LotteryNumber from '@/components/common/LotteryNumber.vue'

describe('LotteryNumber', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(LotteryNumber, {
      propsData: {
        jackpot: {}
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('must render props.jackpot.date when passed', () => {
    const newDate = 'Friday 01 May 2020'
    const wrapper = mount(LotteryNumber, {
      propsData: {
        jackpot: {
          date: newDate
        }
      }
    })
    expect(wrapper.html()).toContain(newDate)
    expect(wrapper.props().jackpot.date).toBe(newDate)
  })
})
