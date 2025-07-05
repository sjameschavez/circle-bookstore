<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto p-4 w-full">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-200 py-4 text-center text-sm text-gray-600">
      © 2025 Bookstore. All rights reserved.
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
