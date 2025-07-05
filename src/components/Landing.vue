<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow py-4 px-6 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-blue-700">📘 Circle Bookstore</h1>
      <router-link
        to="/books"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Browse Books
      </router-link>
    </header>

    <!-- Main Content -->
    <main class="flex-grow flex flex-col items-center justify-center text-center px-4">
      <h2 class="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">
        Welcome to the Circle Bookstore
      </h2>
      <p class="text-gray-600 max-w-xl text-lg mb-8">
        This is a sample project built with Vue 3, Tailwind CSS, Prisma, and a Node.js backend. It demonstrates book browsing, detail views, and simulated purchase functionality.
      </p>
      <router-link
        to="/books"
        class="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded shadow-lg transition"
      >
        Explore Our Collection
      </router-link>
    </main>
  </div>
</template>

<script setup lang="ts">
// No logic needed
</script>
