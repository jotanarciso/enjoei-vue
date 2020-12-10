import VueRouter from 'vue-router'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import vInstructions from '@/pages/instructions'

const localVue = createLocalVue()

localVue.use(VueRouter)

describe('Instructions', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vInstructions, { localVue })
    expect(wrapper.vm).toBeTruthy()
  })

  it('renders relevant text', () => {
    const wrapper = shallowMount(vInstructions, { localVue })
    expect(wrapper.text()).toContain('instruções')
  })

  it('links to search page', () => {
    const wrapper = shallowMount(vInstructions, { localVue })
    const link = wrapper.findComponent({ name: 'router-link' })

    expect(link.attributes().to).toBe('/busca')
  })
})
