<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <!-- Sidebar -->
    <Customerbar />

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

      <!-- My Order Section -->
      <section class="mt-8">
        <h3 class="text-3xl font-bold mb-4">My Order</h3>
        <div class="bg-gray-100 p-4 rounded-lg shadow">
          <OrderItem
            name="Pilau + Beef"
            price="250"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_map_of_Kenya.svg/1200px-Flag_map_of_Kenya.svg.png"
          />
          <OrderItem
            name="Soda"
            price="50"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Flag_map_of_Kenya.svg/1200px-Flag_map_of_Kenya.svg.png"
          />
          <div class="text-3xl font-bold mt-4">Total: Ksh 300</div>

          <button
            @click="openModal"
            class="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
          >
            Checkout
          </button>
        </div>
      </section>

      <!-- Address Section -->
      <section class="mt-8">
        <h3 class="text-2xl font-bold mb-4">Address</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p>Distance: 2Km</p>
            <p>Estimated Time: 2Hrs</p>
            <p>Order Status: <span class="text-blue-500">Preparing</span></p>
            <p>Payment Status: <span class="text-green-500">Completed</span></p>
          </div>
          <div>
            <OrderMap :location="orderLocation" />
          </div>
        </div>
      </section>

      <!-- Modal for Payment Method -->
      <transition name="fade">
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div class="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 class="text-xl font-bold mb-4">Select Payment Method</h3>
            <div class="grid grid-cols-1 gap-4">
              <button
                @click="handlePayment('cash')"
                class="bg-black text-white font-bold py-3 rounded shadow hover:bg-gray-800"
              >
                Cash
              </button>
              <button
                @click="handlePayment('cashless')"
                class="bg-black text-white font-bold py-3 rounded shadow hover:bg-gray-800"
              >
                Cashless
              </button>
            </div>
            <button
              @click="closeModal"
              class="mt-4 text-red-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import Customerbar from "../../Common/Customerbar.vue";
import OrderMap from "../../Common/OrderMap.vue";
import OrderItem from "./OrderItem.vue";

export default {
  name: "CustomerDashboard",
  components: {
    Customerbar,
    OrderMap,
    OrderItem,
  },
  data() {
    return {
      isModalOpen: false,
      orderLocation: { lat: -1.286389, lng: 36.817223 },
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    handlePayment(method) {
      // Handle the payment logic here
      alert(`You selected ${method} payment.`);
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
