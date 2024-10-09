<template>
  <div class="flex">
    <Sidebar />
    <!-- Orders Section -->
    <div class="w-1/2 bg-black text-white p-4">
      <h2 class="text-2xl mb-4">Hi, savannah</h2>
      <div class="flex space-x-4 mb-6">
        <button class="text-yellow-500 border-b-2 border-yellow-500">
          Orders
        </button>
        <button class="text-white">Preparing</button>
        <button class="text-white">Deliveries</button>
      </div>

      <!-- Order List -->
      <div class="space-y-4">
        <div class="bg-gray-800 p-4 rounded-lg flex justify-between">
          <span>Order #1</span>
          <span>Ksh 140</span>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg flex justify-between">
          <span>Order #2</span>
          <span>Ksh 140</span>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg flex justify-between">
          <span>Order #3</span>
          <span>Ksh 140</span>
        </div>
        <div class="bg-gray-800 p-4 rounded-lg flex justify-between">
          <span>Order #4</span>
          <span>Ksh 140</span>
        </div>
      </div>

      <!-- Pagination -->
      <div class="flex justify-between mt-6">
        <button class="bg-gray-300 text-black py-2 px-4 rounded">Prev</button>
        <button class="bg-gray-300 text-black py-2 px-4 rounded">Next</button>
      </div>
    </div>

    <!-- Order Details Section -->
    <div class="w-1/2 bg-gray-100 p-4">
      <div class="mb-6">
        <h3 class="text-2xl">Order #1</h3>
        <p class="text-gray-600">User #1 since 2020</p>
      </div>

      <!-- Address and Payment Details -->
      <div class="grid grid-cols-2 gap-4 mb-6">
        <div class="col-span-2 border-b pb-2">Address</div>
        <div>Distance</div>
        <div>Estimated Time</div>
        <div>Payment</div>
        <div>Payment Status</div>
      </div>

      <!-- Items List -->
      <div class="space-y-2 mb-6">
        <div class="flex items-center">
          <span
            class="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"
          ></span>
          <span>Tea</span>
          <span class="ml-auto">Ksh 30</span>
        </div>
        <div class="flex items-center">
          <span
            class="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"
          ></span>
          <span>Sausages</span>
          <span class="ml-auto">Ksh 80</span>
        </div>
        <div class="flex items-center">
          <span
            class="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"
          ></span>
          <span>Sausages</span>
          <span class="ml-auto">Ksh 40</span>
        </div>
      </div>

      <!-- Total -->
      <div class="text-right">
        <p class="text-xl font-bold">Total: Ksh 150</p>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../AdminDashboard/Sidebar.vue';
export default {
  name: "OrderList",
  components: {
    Sidebar
  }
};
</script>
