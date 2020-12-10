import { shallowMount } from '@vue/test-utils'
import vContainer from '@/components/container'

describe('Container', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vContainer)
    expect(wrapper.vm).toBeTruthy()
  })

  it('toggle class according to prop gutter', () => {
    const withGutterClass = '-with-gutter'

    let wrapper = shallowMount(vContainer)
    expect(wrapper.classes()).toContain(withGutterClass)

    wrapper = shallowMount(vContainer, { propsData: { gutter: false }})
    expect(wrapper.classes()).not.toContain(withGutterClass)

    wrapper = shallowMount(vContainer, { propsData: { gutter: true }})
    expect(wrapper.classes()).toContain(withGutterClass)
  })
})
