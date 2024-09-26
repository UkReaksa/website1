<template>
  <!-- Button to toggle navbar -->
  <div
    @click="toggleNavbar"
    class="absolute top-5 left-5 cursor-pointer md:opacity-0 opacity-100"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
      />
    </svg>
  </div>

  <!-- Navbar menu items -->
  <div
    v-if="isNavbarOpen"
    class="absolute top-16 left-0 right-0 flex-col items-center gap-y-5 shadow-lg p-6 bg-white rounded-lg transition-all duration-300 ease-in-out transform
    md:flex"
    :class="{ 'translate-y-0 opacity-100': isNavbarOpen, 'translate-y-[-20px] opacity-0': !isNavbarOpen }"
  >
    <ul class="flex flex-col md:flex-row md:justify-center md:gap-x-4 gap-y-4">
      <li><NuxtLink href="/" class="nav-link">Home</NuxtLink></li>
      <li><NuxtLink href="/product/pro" class="nav-link">Product</NuxtLink></li>
      <li><NuxtLink href="/product/about" class="nav-link">Login</NuxtLink></li>
      <li><NuxtLink href="/me/ime" class="nav-link nav-link-me">About</NuxtLink></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isNavbarOpen = ref(true); // Start with the menu hidden

const toggleNavbar = () => {
  isNavbarOpen.value = !isNavbarOpen.value; // Toggle the menu visibility
};
</script>

<style scoped>
/* Additional styles for nav links */
.nav-link {
  @apply text-gray-800 font-medium transition-colors duration-300 py-2 px-4 rounded-lg;
}

.nav-link:hover {
  @apply bg-gray-100 text-gray-600;
}

/* Enhanced style for "Me" link */
.nav-link-me {
  @apply text-blue-500 font-bold; /* Customize as needed */
}

.nav-link-me:hover {
  @apply bg-blue-100 text-blue-700; /* Darker shade on hover */
}

/* Additional styles for the navbar container */
.navbar-container {
  @apply bg-white shadow-lg rounded-lg p-6; /* Customize navbar appearance */
}

/* Media query for flex layout in md and larger screens */
@media (min-width: 768px) {
  ul {
    @apply flex-row justify-center gap-x-4; /* Flex layout for li items */
  }
}
</style>
