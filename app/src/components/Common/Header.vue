<template>
  <div class="">
    <!-- Header Section -->
    <header
      class="bg-gray-400 p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
    >
      <!-- Logo and Centered Search -->
      <div
        class="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:w-auto md:space-x-4"
      >
        <!-- Logo with router-link -->
        <router-link to="/" class="text-2xl font-bold mb-2 md:mb-0">
          DOS
        </router-link>

        <!-- Centered Search Bar -->
        <div class="relative flex-grow w-full md:w-auto mx-auto">
          <input
            type="text"
            placeholder="Search..."
            class="bg-white text-black w-full p-2 rounded-lg pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-2 top-2 w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 4a6 6 0 100 12 6 6 0 000-12zm0 0l4.5 4.5"
            />
          </svg>
        </div>
      </div>

      <!-- Account and Tray (on the right) -->
      <div class="flex items-center space-x-4">
        <router-link to="/admin" class="hover:underline">Admin</router-link>
        <router-link to="/customer" class="hover:underline">Customer</router-link>
        <router-link to="/account" class="hover:underline">Account</router-link>
        <router-link to="/tray" class="hover:underline">Tray</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "MainComponent",
};
</script>
