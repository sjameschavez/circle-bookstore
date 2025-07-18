<template>
  <div class="max-w-7xl mx-auto px-4">
    <h1 class="text-2xl font-bold mb-6 text-blue-900">📚 Available Books</h1>

    <!-- Loading Spinner -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50"></div>
      <span class="ml-4 text-gray-600 text-sm">Loading books...</span>
    </div>

    <!-- Books Grid -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div
        v-for="book in books"
        :key="book.id"
        class="bg-white rounded-xl shadow hover:shadow-md transition-all duration-300"
      >
        <router-link :to="`/books/${book.id}`" class="block h-full">
          <img
            :src="book.coverImage || 'https://blocks.astratic.com/img/general-img-landscape.png'"
            alt="Book cover"
            class="w-full h-48 object-cover rounded-t-xl"
          />

          <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-800 truncate">{{ book.title }}</h2>
            <p class="text-sm text-gray-600 mb-2 truncate">by {{ book.author }}</p>
            <p class="text-blue-600 font-semibold">{{ book.displayPrice }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchBooks } from '@/api/bookService'
import { Book } from '@/models/Book'

const books = ref<Book[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    books.value = await fetchBooks()
  } catch (error) {
    console.error('Failed to load books:', error)
  } finally {
    loading.value = false
  }
})
</script>
