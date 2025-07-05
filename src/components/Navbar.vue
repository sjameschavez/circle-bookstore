<template>
  <header class="bg-blue-800 text-white shadow">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
      <!-- Left: Logo and Nav -->
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <!-- <img src="/logo.svg" alt="Logo" class="w-6 h-6" /> -->
          <h1 class="text-lg font-semibold">Circle Bookstore</h1>
        </div>

        <!-- Desktop nav -->
        <nav class="hidden md:flex gap-4 text-sm">
          <router-link to="/" class="hover:underline">Home</router-link>
          <router-link to="/books" class="hover:underline">Books</router-link>
        </nav>
      </div>

      <!-- Right Actions -->
      <div class="flex items-center gap-4 text-sm">
        <!-- <router-link to="/pos" class="hover:underline hidden md:inline">Point of Sale</router-link> -->
        <!-- <router-link to="/admin" class="hover:underline hidden md:inline">Admin</router-link> -->
        <!-- <router-link to="/cart" class="hover:text-white hidden md:inline">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
               viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9h12l-2-9M10 21h4"/>
          </svg>
        </router-link> -->

        <!-- Mobile Toggle Button (HIDDEN ON DESKTOP) -->
        <button @click="isOpen = !isOpen"
                class="block md:hidden text-white focus:outline-none">
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
               fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (ONLY ON SMALL SCREENS) -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4">
      <nav class="flex flex-col gap-2 text-sm">
        <router-link to="/" @click="isOpen = false" class="hover:underline">Home</router-link>
        <router-link to="/books" @click="isOpen = false" class="hover:underline">Books</router-link>
        <router-link to="/clothing" @click="isOpen = false" class="hover:underline">Clothing</router-link>
        <router-link to="/recordings" @click="isOpen = false" class="hover:underline">Recordings</router-link>
        <router-link to="/swag" @click="isOpen = false" class="hover:underline">Swag</router-link>
        <router-link to="/pos" @click="isOpen = false" class="hover:underline">Point of Sale</router-link>
        <router-link to="/admin" @click="isOpen = false" class="hover:underline">Admin</router-link>
        <router-link to="/cart" @click="isOpen = false" class="hover:underline">Cart</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const isOpen = ref(false)
</script>
