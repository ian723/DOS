<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
        <Customerbar/>
  
      <!-- Main Content -->
      <div class="w-full lg:w-4/6 bg-black text-white p-4">
        <!-- Navbar for mobile -->
        <div class="flex lg:hidden justify-between mb-4">
          <h1>Hi, Savannah</h1>
          <button @click="toggleSidebar" class="text-white focus:outline-none">
            ☰
          </button>
        </div>
  
        <div class="flex justify-between">
          <h1 class="hidden lg:block">Hi, Savannah</h1>
          <div class="relative w-full lg:w-1/2">
            <input type="text" class="rounded-lg p-2 w-full" placeholder="Search" />
            <button class="absolute right-2 top-2">
              🔍
            </button>
          </div>
        </div>
  
        <h2 class="text-2xl mt-4">Category</h2>
        <div class="mt-4">
          <h3 class="text-lg">Popular Dishes</h3>
          <!-- Placeholder for popular dishes -->
        </div>
  
        <div class="mt-4">
          <h3 class="text-lg">Recent Orders</h3>
          <div class="bg-gray-300 rounded-lg p-4 mt-2"></div>
          <div class="bg-gray-300 rounded-lg p-4 mt-2"></div>
        </div>
      </div>
  
      <!-- Tray -->
      <div class="w-1/6 bg-gray-200 p-4 hidden lg:block">
        <h3 class="text-lg font-bold">Tray</h3>
        <ul>
          <li class="flex justify-between py-2">
            <span>Tea (1 Cup)</span>
            <span>Kshs 30</span>
          </li>
          <li class="flex justify-between py-2">
            <span>Tea (1 Cup)</span>
            <span>Kshs 30</span>
          </li>
          <li class="flex justify-between py-2">
            <span>Tea (1 Cup)</span>
            <span>Kshs 30</span>
          </li>
        </ul>
        <div class="flex justify-between mt-4">
          <span>Service</span>
          <span>Kshs 3</span>
        </div>
        <div class="flex justify-between mt-2 font-bold">
          <span>Total</span>
          <span>Kshs 90</span>
        </div>
  
        <button class="bg-yellow-300 w-full py-2 mt-4 rounded-md">Checkout</button>
  
        <div class="mt-4 bg-orange-200 p-2 rounded-md">
          <p>Kabira Road,</p>
          <p>Biashara House</p>
          <p>2nd Floor, Rm 92</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Customerbar from '../../Common/Customerbar.vue';

  export default {
    name: "Dashboard",
    components: [
        Customerbar
    ]
  };
  </script>
  
