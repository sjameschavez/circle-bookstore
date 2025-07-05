import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import BookList from '../../books/BookList.vue'
import * as bookService from '../../../api/bookService'
import { createMemoryHistory, createRouter } from 'vue-router'

// Mock router setup to avoid router-link errors
vi.setConfig({ testTimeout: 10000 }) // 10 seconds

const router = createRouter({
  history: createMemoryHistory(),
  routes: [],
})

// Mock book data
const mockBooks = [
  {
    id: 1,
    title: 'Clean Code',
    author: 'Robert C. Martin',
    displayPrice: '$29.99',
    coverImage: ''
  },
  {
    id: 2,
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    displayPrice: '$39.99',
    coverImage: ''
  }
]

// Mock the fetchBooks function
vi.spyOn(bookService, 'fetchBooks').mockResolvedValue(mockBooks)

describe('BookList.vue', () => {
  beforeEach(async () => {
    // await router.isReady()
  },)

  it('renders a list of book cards with correct content', async () => {
    const wrapper = mount(BookList, {
      global: {
        plugins: [router]
      }
    })

    await flushPromises()

    const cards = wrapper.findAll('div.shadow')
    expect(cards).toHaveLength(mockBooks.length)

    // Check content
    expect(wrapper.text()).toContain('Clean Code')
    expect(wrapper.text()).toContain('The Pragmatic Programmer')
    expect(wrapper.text()).toContain('$29.99')
    expect(wrapper.text()).toContain('$39.99')
  })
})
