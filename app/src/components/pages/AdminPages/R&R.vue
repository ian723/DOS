<template>
  <div class="flex flex-col lg:flex-row min-h-screen ">
    <!-- Sidebar -->
    <Adminbar />

    <!-- Main Content -->
    <div class="flex-1 bg-black text-white p-8">
      <h2 class="text-2xl lg:text-3xl mb-6">Hi, savannah</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Review Cards -->
        <div
          class="bg-gray-200 p-4 rounded-lg text-black space-y-4"
          v-for="n in 6"
          :key="n"
        >
          <!-- User Info -->
          <div class="flex items-center space-x-4">
            <div class="bg-orange-400 w-10 h-10 rounded-full"></div>
            <div>
              <h4 class="font-semibold">User1</h4>
              <span class="text-sm text-gray-600">Since 2020</span>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex">
            <span v-for="star in 5" :key="star" class="text-yellow-400">★</span>
          </div>

          <!-- Review Text -->
          <p class="text-gray-700">
            The food was amazing but the delivery guy was rude.
          </p>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-end mt-6">
        <button
          class="px-4 py-2 bg-gray-300 text-black rounded mr-2 hover:bg-gray-400 transition-colors"
        >
          Prev
        </button>
        <button
          class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Adminbar from "../../Common/Adminbar.vue";

export default {
  name: "RatesAndReviews",
  components: {
    Adminbar,
  },
};
</script>

<style scoped></style>
