<template>
  <div class="flex flex-col min-h-screen bg-gray-50 text-gray-900">
    <!-- Header -->
    <Navbar />

    <!-- Main Content -->
    <main class="flex-grow max-w-7xl mx-auto p-4 w-full">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="text-center text-gray-500 text-sm py-6">
      © 2025 Circle Bookstore · Demo Project by Stephen
    </footer>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
