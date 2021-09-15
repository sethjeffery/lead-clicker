import { shallowMount } from '@vue/test-utils'
import Clicker from '@/components/Clicker.vue'

describe('Clicker', () => {
  test('clicking', async () => {
    const wrapper = shallowMount(Clicker)
    await wrapper.find('div').trigger('click')
    expect(wrapper.emitted().click).toBeTruthy()
  })
})
