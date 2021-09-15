import { shallowMount } from '@vue/test-utils'
import Factories from '@/components/Factories.vue'

describe('Factories', () => {
  test('renders all factories', () => {
    const wrapper = shallowMount(Factories, {
      propsData: {
        factories: [{}, {}, {}]
      }
    })

    // assert the factories are rendered
    expect(wrapper.findAll('factory-stub')).toHaveLength(3)
  })

  test('passes up events', async () => {
    const wrapper = shallowMount(Factories, {
      propsData: {
        factories: [{}]
      }
    })

    await wrapper.find('factory-stub').trigger('purchase')

    // assert the factories are rendered
    expect(wrapper.emitted().purchase).toBeTruthy()
  })
})
