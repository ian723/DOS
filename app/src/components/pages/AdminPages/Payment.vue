<template>
  <div class="flex flex-col md:flex-row min-h-screen">
    <!-- Sidebar -->
    <Adminbar />

    <!-- Main Content -->
    <div class="w-full md:w-4/5 bg-black text-white flex flex-col p-4">
      <!-- Header -->
      <div class="mb-4">
        <h2 class="text-lg sm:text-xl md:text-2xl mb-4">Hi, savannah</h2>
      </div>

      <!-- Table Header (Columns) -->
      <div
        class="grid grid-cols-2 sm:grid-cols-4 gap-4 font-semibold mb-2 text-center"
      >
        <div>Orders</div>
        <div>Customers</div>
        <div>Payment</div>
        <div>Payment Status</div>
      </div>

      <!-- Order List Rows -->
      <div class="flex-grow space-y-2">
        <!-- Row 1 -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg text-center"
        >
          <div>Order #1</div>
          <div>Customer 1</div>
          <div>Cash</div>
          <div>Completed</div>
        </div>
        <!-- Row 2 -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg text-center"
        >
          <div>Order #2</div>
          <div>Customer 2</div>
          <div>Cashless</div>
          <div>Pending</div>
        </div>
        <!-- Row 3 -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg text-center"
        >
          <div>Order #3</div>
          <div>Customer 3</div>
          <div>Cash</div>
          <div>Completed</div>
        </div>
        <!-- Row 4 -->
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-gray-800 p-4 rounded-lg text-center"
        >
          <div>Order #4</div>
          <div>Customer 4</div>
          <div>Cashless</div>
          <div>Pending</div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between mt-4">
        <button class="bg-gray-300 text-black py-2 px-4 rounded">Prev</button>
        <button class="bg-gray-300 text-black py-2 px-4 rounded">Next</button>
      </div>

      <!-- Footer Section -->
      <div
        class="flex flex-col md:flex-row justify-between items-center bg-gray-900 p-4 mt-4 rounded-lg"
      >
        <div class="text-lg md:text-xl text-white mb-4 md:mb-0">
          Total Income: <span class="font-bold">$12,890.00</span>
        </div>
        <div
          class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left"
        >
          <div class="text-white">
            Income: <span class="font-bold">$4345.00</span> (+15%)
          </div>
          <div class="text-white">
            Expense: <span class="font-bold">$2890.00</span> (-10%)
          </div>
        </div>
        <button
          class="bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-600 mt-4 md:mt-0"
        >
          Withdraw
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Adminbar from "../../Common/Adminbar.vue";

export default {
  name: "Payment",
  components: {
    Adminbar,
  },
};
</script>
