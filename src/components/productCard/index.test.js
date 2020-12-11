import { shallowMount } from '@vue/test-utils'
import vProductCard from '@/components/product-card'

describe('ProductCard', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vProductCard, { propsData: {
      imageId: '',
      title: '',
      path: ''
    }})

    expect(wrapper.vm).toBeTruthy()
  })
})
