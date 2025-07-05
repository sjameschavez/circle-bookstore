import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import BookDetail from '../../books/BookDetail.vue'
import * as bookService from '../../../api/bookService'
import { createRouter, createMemoryHistory } from 'vue-router'

// ✅ Mock vue3-toastify
vi.mock('vue3-toastify', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn()
  }
}))
import { toast } from 'vue3-toastify'

// ✅ Mock book data
const mockBook = {
  id: 1,
  title: 'Domain-Driven Design',
  author: 'Eric Evans',
  description: 'Tackles complexity in the heart of software.',
  price: 49.99,
  displayPrice: '$49.99',
  coverImage: '',
  isbn: '1234567890',
  availableStock: 5
}

// ✅ Spy on API
vi.spyOn(bookService, 'fetchBook').mockResolvedValue(mockBook)
const purchaseSpy = vi.spyOn(bookService, 'purchaseBook').mockResolvedValue()

// ✅ Setup router
const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/books/:id', component: BookDetail }
  ]
})
router.push('/books/1')

describe('BookDetail.vue', () => {
  beforeEach(async () => {
    await router.isReady()
  })

  it('renders book details', async () => {
    const wrapper = mount(BookDetail, {
      global: {
        plugins: [router]
      }
    })

    await flushPromises()

    expect(wrapper.text()).toContain(mockBook.title)
    expect(wrapper.text()).toContain(mockBook.author)
    expect(wrapper.text()).toContain(mockBook.description)
    expect(wrapper.text()).toContain(mockBook.displayPrice)

    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://blocks.astratic.com/img/general-img-landscape.png')
  })

  it('calls purchaseBook and shows toast on button click', async () => {
    const wrapper = mount(BookDetail, {
      global: {
        plugins: [router]
      }
    })

    await flushPromises()

    const button = wrapper.get('button')
    await button.trigger('click')
    await flushPromises()

    expect(purchaseSpy).toHaveBeenCalledWith(mockBook.id)
    expect(toast.success).toHaveBeenCalledWith('✅ Purchase successful!')
  })
})
