import { shallowMount } from '@vue/test-utils'
import Factory from '@/components/Factory.vue'

describe('Factory', () => {
  test('visible', () => {
    // render the component
    const wrapper = shallowMount(Factory, {
      propsData: {
        factory: {
          cost: 0,
          visible: true,
        },
        leads: 0
      }
    })

    // assert the factory is rendered
    expect(wrapper.find('.factory').exists()).toBe(true)
  })

  test('invisible', () => {
    // render the component
    const wrapper = shallowMount(Factory, {
      propsData: {
        factory: {},
        leads: 0
      }
    })

    // assert the factory is rendered
    expect(wrapper.find('.factory').exists()).toBe(false)
  })

  test('purchase factory', async () => {
    // render the component
    const wrapper = shallowMount(Factory, {
      propsData: {
        factory: {
          cost: 1,
          visible: true
        },
        leads: 100
      }
    })

    await wrapper.find('.factory').trigger('click')
    expect(wrapper.emitted().purchase).toBeTruthy()
  })
})
