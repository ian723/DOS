<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <!-- Sidebar -->
    <Sidebar />

    <!-- Main Content -->
    <div class="flex-grow p-4 bg-white">
      <!-- Top Section: Greeting and Search -->
      <div class="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 class="text-2xl">Hi, Savannah</h2>
        <div class="mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search..."
            class="border rounded p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
      </div>

      <!-- Chart Area -->
      <div class="bg-gray-100 p-4 rounded-lg mb-6">
        <!-- Placeholder for Chart -->
        <div
          class="h-64 bg-gray-300 flex items-center justify-center rounded-lg"
        >
          <p>Chart Placeholder</p>
        </div>
      </div>

      <!-- Recent Orders Section -->
      <div>
        <h3 class="text-xl mb-4">Recent Orders</h3>
        <div class="space-y-4">
          <!-- Order Item -->
          <div
            class="border border-gray-300 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p class="text-blue-600">Order #1</p>
              <p>June 1st 2020 8:20 AM</p>
              <p>Total: Kshs 40</p>
              <p>Address: Gibcon Hse, 4th floor, Rm 125</p>
            </div>
            <div>
              <span class="bg-green-500 text-white px-4 py-2 rounded-lg">
                Completed
              </span>
            </div>
          </div>

          <div
            class="border border-gray-300 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p class="text-blue-600">Order #2</p>
              <p>June 1st 2020 8:20 AM</p>
              <p>Total: Kshs 40</p>
              <p>Address: Gibcon Hse, 4th floor, Rm 125</p>
            </div>
            <div>
              <span class="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                Delivering
              </span>
            </div>
          </div>

          <div
            class="border border-gray-300 p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <p class="text-blue-600">Order #3</p>
              <p>June 1st 2020 8:20 AM</p>
              <p>Total: Kshs 40</p>
              <p>Address: Gibcon Hse, 4th floor, Rm 125</p>
            </div>
            <div>
              <span class="bg-red-500 text-white px-4 py-2 rounded-lg">
                Pending
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../../Common/Adminbar.vue";

export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
};
</script>

<style scoped>
/* Additional styles can be added here if necessary */
</style>
