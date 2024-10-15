<template>
  <div>
    <!-- Sidebar -->
    <div
      class="w-1/6 bg-white shadow-lg p-4 lg:block hidden"
      :class="{ block: isSidebarOpen, hidden: !isSidebarOpen }"
    >
      <h2 class="text-lg font-semibold">DOS Cafe</h2>
      <ul class="mt-4 space-y-4">
        <li>
          <router-link
            to="/dashboard"
            class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
          >
            Dashboard
          </router-link>
        </li>
        <li>
          <router-link
            to="/food-order"
            class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
          >
            Food Order
          </router-link>
        </li>
        <li>
          <router-link
            to="/order-history"
            class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
          >
            Order History
          </router-link>
        </li>
        <li>
          <router-link
            to="/bills"
            class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
          >
            Bills
          </router-link>
        </li>
        <li>
          <router-link
            to="/reviews"
            class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
          >
            Reviews
          </router-link>
        </li>
      </ul>
    </div>

    <!-- Mobile Navbar Toggle -->
    <div class="lg:hidden flex justify-between mb-4 p-4">
      <h1>DOS Cafe</h1>
      <button @click="toggleSidebar" class="text-black focus:outline-none">
        ☰
      </button>
    </div>
  </div>
</template>

<script>
export default {
    name: "Customerbar",
    
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

