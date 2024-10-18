<template>
  <div class="min-h-screen flex flex-col lg:flex-row bg-gray-50">

    <Customerbar/>

    <!-- Left Side: Orders List -->
    <div class="w-full lg:w-2/3 p-4 lg:p-6 bg-black text-white">
      <div class="flex flex-col lg:flex-row justify-between items-center mb-4">
        <h1 class="text-2xl font-bold mb-4 lg:mb-0">Hi, Savannah</h1>
        <div class="relative w-full lg:w-auto">
          <input
            type="text"
            placeholder="Search"
            class="rounded-full p-2 pl-8 w-full lg:w-auto bg-white text-black"
          />
          <span class="absolute top-2 left-2 text-gray-500">
            <i class="fa fa-search"></i>
            <!-- Font Awesome icon -->
          </span>
        </div>
      </div>

      <!-- Orders List -->
      <div class="space-y-4">
        <OrderCard
          v-for="(order, index) in orders"
          :key="index"
          :order="order"
        />
      </div>
    </div>

    <!-- Right Side: Tray and Order Details -->
    <div class="w-full lg:w-1/3 p-4 lg:p-6 bg-gray-100">
      <!-- Tray Header -->
      <div class="flex justify-between items-center">
        <h2 class="text-xl font-bold">Tray</h2>
        <i class="fa fa-cog text-xl"></i>
        <!-- Settings icon -->
      </div>

      <!-- Tray Items -->
      <div class="space-y-2 mt-4">
        <TrayItem
          v-for="(item, index) in trayItems"
          :key="index"
          :item="item"
        />
      </div>

      <!-- Checkout Section -->
      <div class="mt-6">
        <div class="flex justify-between items-center mb-2">
          <p class="text-sm">Service</p>
          <p class="text-sm">Kshs 3</p>
        </div>
        <div class="flex justify-between items-center mb-4">
          <p class="text-lg font-bold">Total</p>
          <p class="text-lg font-bold">Kshs 90</p>
        </div>
        <button class="w-full py-2 bg-yellow-500 text-white font-bold rounded">
          Checkout
        </button>
      </div>

      <!-- Order Details -->
      <div class="mt-6 space-y-2">
        <p><strong>Distance:</strong> 2Km</p>
        <p><strong>Estimated Time:</strong> 2Hrs</p>
        <p><strong>Order Status:</strong> Completed</p>
        <p><strong>Payment Status:</strong> Completed</p>
      </div>
    </div>
  </div>
</template>

<script>
import Customerbar from "../../Common/Customerbar.vue";
import OrderCard from "./OrderCard.vue";
import TrayItem from "./TrayItem.vue";

export default {
  components: {
    OrderCard,
    TrayItem,
    Customerbar,
  },
  data() {
    return {
      // Separate data for orders and tray items
      orders: [
        { id: 1, number: "Order#1", date: "Oct 2024", total: 300 },
        { id: 2, number: "Order#2", date: "Oct 2024", total: 250 },
        { id: 3, number: "Order#3", date: "Oct 2024", total: 400 },
        { id: 4, number: "Order#4", date: "Oct 2024", total: 150 },
      ],
      trayItems: [
        { id: 1, name: "Tea", quantity: "1 Cup", price: 30, image: "tea.png" },
        {
          id: 2,
          name: "Coffee",
          quantity: "1 Cup",
          price: 40,
          image: "coffee.png",
        },
        {
          id: 3,
          name: "Juice",
          quantity: "1 Glass",
          price: 50,
          image: "juice.png",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
