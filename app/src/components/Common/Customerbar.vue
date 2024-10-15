<template>
  <div
    class="w-1/6 bg-white shadow-lg p-4 lg:block hidden"
    :class="{ block: isSidebarOpen, hidden: !isSidebarOpen }"
  >
    <h2 class="text-lg font-semibold">DOS Cafe</h2>
    <ul class="mt-4 space-y-4">
      <li>
        <router-link
          to="dash"
          class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
        >
          Dashboard
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
        >
          Food Order
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
        >
          Order History
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
        >
          Bills
        </router-link>
      </li>
      <li>
        <router-link
          to="#"
          class="bg-yellow-300 block w-full text-center py-2 rounded-md hover:bg-yellow-400"
        >
          Reviews
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
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
