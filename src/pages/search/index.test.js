import { shallowMount } from '@vue/test-utils'
import vSearch from '@/pages/search'
import axios from 'axios'

jest.mock('axios')

describe('Search', () => {
  it('mounts', () => {
    const wrapper = shallowMount(vSearch)
    expect(wrapper.vm).toBeTruthy()
  })

  it('requests products from the API', () => {
    expect(axios.post).toHaveBeenCalledWith(
      expect.stringMatching('https://enjusearch.enjoei.com.br/graphql-search'),
      expect.objectContaining({
        query: expect.any(String),
        variables: expect.any(Object)
      })
    )
  })
})
