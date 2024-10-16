<template>
  <div class="flex flex-col lg:flex-row min-h-screen ">
    <Customerbar/>
    
    <!-- Sidebar: On small screens, it will take full width and stack -->
    <div class="w-full lg:w-1/3 bg-black text-white p-6">
      <h1 class="text-2xl sm:text-3xl mb-4">Hi, Savannah</h1>
      <div class="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          class="flex-grow px-4 py-2 rounded-l bg-gray-800 text-white"
        />
        <button class="bg-yellow-500 p-3 rounded-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <!-- Category -->
      <h2 class="text-xl sm:text-2xl mb-4">Category</h2>
      <!-- Popular Dishes -->
      <h2 class="text-xl sm:text-2xl mb-4">Popular Dishes</h2>

      <!-- Recent Orders -->
      <h2 class="text-xl sm:text-2xl mb-4">Recent Orders</h2>
      <div class="bg-gray-500 p-4 mb-2 rounded"></div>
      <div class="bg-gray-500 p-4 rounded"></div>
    </div>

    <!-- Tray Section -->
    <div class="w-full lg:w-2/3 bg-gray-200 p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl sm:text-2xl">Tray</h2>
        <div class="flex items-center space-x-4">
          <!-- Settings Button -->
          <button class="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6.253V3m0 18v-3.253m4.243-3.421l2.657 2.656m-12.2-12.2l2.656-2.656m9.9 9.9l-2.657-2.656M6.343 6.343l-2.657 2.656"
              />
            </svg>
          </button>

          <!-- Profile Button -->
          <button class="text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A12.073 12.073 0 0112 15c2.81 0 5.391.98 6.879 2.804m-6.879-6.804a3 3 0 100-6 3 3 0 000 6z"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Items -->
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row items-center bg-white p-4 rounded shadow">
          <img
            src="https://via.placeholder.com/50"
            alt="Item"
            class="w-12 h-12 rounded-full"
          />
          <div class="flex-grow ml-4">
            <h3 class="text-lg">Tea</h3>
            <p class="text-sm">1 Cup</p>
          </div>
          <div>
            <p>Kshs 30</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center bg-white p-4 rounded shadow">
          <img
            src="https://via.placeholder.com/50"
            alt="Item"
            class="w-12 h-12 rounded-full"
          />
          <div class="flex-grow ml-4">
            <h3 class="text-lg">Tea</h3>
            <p class="text-sm">1 Cup</p>
          </div>
          <div>
            <p>Kshs 30</p>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row items-center bg-white p-4 rounded shadow">
          <img
            src="https://via.placeholder.com/50"
            alt="Item"
            class="w-12 h-12 rounded-full"
          />
          <div class="flex-grow ml-4">
            <h3 class="text-lg">Tea</h3>
            <p class="text-sm">1 Cup</p>
          </div>
          <div>
            <p>Kshs 30</p>
          </div>
        </div>
      </div>

      <!-- Total and Checkout -->
      <div class="mt-6">
        <div class="flex justify-between mb-2">
          <p>Service</p>
          <p>Kshs 3</p>
        </div>
        <div class="flex justify-between mb-4 font-bold">
          <p>Total</p>
          <p>Kshs 90</p>
        </div>
        <button class="w-full bg-yellow-500 py-3 rounded text-white text-lg">
          Checkout
        </button>
      </div>

      <!-- Address -->
      <div class="mt-8 p-4 bg-orange-300 rounded">
        <p>Kabira Road, Biashara House</p>
        <p>2nd Floor, Rm 92</p>
      </div>
    </div>
  </div>
</template>

<script>
import Customerbar from '../../Common/Customerbar.vue';

export default {
  name: "Dash",
  components: {
    Customerbar
  }
};
</script>
