<template>
  <div class="flex-grow p-4">
    <Customerbar />
    <!-- Main Content -->
    <div class="flex justify-between">
      <h1 class="hidden lg:block">Hi, Savannah</h1>
      <div class="relative w-full lg:w-1/2">
        <input type="text" class="rounded-lg p-2 w-full" placeholder="Search" />
        <button class="absolute right-2 top-2">🔍</button>
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
</template>

<script>
import Customerbar from "../../Common/Customerbar.vue";

export default {
  name: "Dashboard",
  components: [Customerbar],
};
</script>
