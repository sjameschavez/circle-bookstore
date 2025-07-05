<template>
  <div class="max-w-4xl mx-auto mt-8">
    <!-- Loading -->
    <div v-if="loading" class="flex items-center justify-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
      <span class="ml-4 text-gray-600 text-sm">Loading book details...</span>
    </div>

    <!-- Book Details -->
    <div v-else-if="book" class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="md:flex">
        <!-- Cover -->
        <div class="md:flex-shrink-0">
          <img
            :src="book.coverImage || 'https://blocks.astratic.com/img/general-img-landscape.png'"
            alt="Book cover"
            class="h-64 w-full object-cover md:h-full md:w-64"
          />
        </div>

        <!-- Info -->
        <div class="p-6 flex flex-col justify-between w-full">
          <div>
            <h1 class="text-2xl font-bold text-gray-900">{{ book.title }}</h1>
            <p class="text-gray-600 italic">by {{ book.author }}</p>

            <div class="mt-4 space-y-2 text-gray-700 text-sm">
              <p><span class="font-semibold">ISBN:</span> {{ book.isbn }}</p>
              <p><span class="font-semibold">Price:</span> {{ book.displayPrice }}</p>
              <p>
                <span class="font-semibold">Available Stock:</span>
                {{ book.availableStock }}
              </p>
              <p v-if="book.description">
                <span class="font-semibold">Description:</span> {{ book.description }}
              </p>
            </div>
          </div>

          <div class="mt-6 flex justify-end">
            <button
              @click="purchase"
              :disabled="purchased"
              class="bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium px-6 py-2 rounded-lg transition"
            >
              {{ purchased ? 'Purchased' : 'Purchase' }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="text-center py-16 text-gray-500">Book not found.</div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fetchBook, purchaseBook } from '@/api/bookService'
import { Book } from '@/models/Book'
import { toast } from 'vue3-toastify'

const route = useRoute()
const book = ref<Book | null>(null)
const loading = ref(true)
const purchased = ref(false)

onMounted(async () => {
  const id = route.params.id as string
  try {
    book.value = await fetchBook(id)
  } catch (error) {
    console.error('Failed to fetch book:', error)
    toast.error('❌ Failed to load book details.')
  } finally {
    loading.value = false
  }
})

async function purchase() {
  if (!book.value || purchased.value) return

  try {
    await purchaseBook(book.value.id)
    purchased.value = true

    if (book.value.availableStock && book.value.availableStock > 0) {
      book.value.availableStock -= 1
    }

    toast.success('✅ Purchase successful!')
  } catch (error) {
    console.error('Purchase failed:', error)
    toast.error('❌ Failed to complete purchase.')
  }
}
</script>
