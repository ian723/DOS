<template>
  <div class="flex flex-col lg:flex-row">
    <!-- Sidebar -->
    <Adminbar />

    <!-- Main Content -->
    <div class="flex-1 bg-black text-white p-8">
      <h2 class="text-2xl lg:text-3xl mb-6">Hi, savannah</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- Left Section (Performance and Order Stats) -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Performance Statistic -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex justify-between mb-4">
              <h3 class="text-lg lg:text-xl">Performance Statistic</h3>
              <span>This Month</span>
            </div>
            <!-- Chart -->
            <div>
              <img src="" alt="Performance Chart" class="w-full" />
            </div>
          </div>

          <!-- Order Rate -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <div class="flex justify-between mb-4">
              <h3 class="text-lg lg:text-xl">Order Rate</h3>
              <span>This Month</span>
            </div>
            <!-- Chart -->
            <div>
              <img src="" alt="Order Rate Chart" class="w-full" />
            </div>
          </div>
        </div>

        <!-- Right Section (Order Summary & Popular Food) -->
        <div class="space-y-8">
          <!-- Order Summary -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg lg:text-xl mb-4">Total Order Complete</h3>
            <ul class="space-y-4">
              <li class="flex justify-between">
                <span>Total Order Delivered</span>
                <span>1,234</span>
              </li>
              <li class="flex justify-between">
                <span>Total Order Canceled</span>
                <span>123</span>
              </li>
              <li class="flex justify-between">
                <span>Order Pending</span>
                <span>432</span>
              </li>
            </ul>
          </div>

          <!-- Popular Food -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg lg:text-xl mb-4">Popular Food</h3>
            <!-- Chart -->
            <div>
              <img src="" alt="Popular Food Chart" class="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Adminbar from "../../Common/Adminbar.vue";

export default {
  name: "Dashboard",
  components: {
    Adminbar,
  },
};
</script>
