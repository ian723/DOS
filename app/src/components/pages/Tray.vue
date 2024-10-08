<template>
  <div class="min-h-screen bg-black p-4 md:p-8">
    <div class="bg-gray-200 p-4 md:p-6 rounded-lg">
      <h1 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Tray</h1>

      <!-- Display total items in the tray -->
      <div v-if="items.length > 0" class="mb-4 text-lg font-bold">
        Total Items: {{ totalItems }}
      </div>

      <div v-if="items.length === 0" class="text-gray-500">
        Your tray is empty.
      </div>
      <div v-else>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="bg-white p-4 rounded-lg mb-4 flex justify-between"
        >
          <div class="flex items-center">
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mr-4"
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
              }"
            ></div>
            <div>
              <p class="text-sm md:text-base font-bold">{{ item.name }}</p>
              <p class="text-sm text-gray-500">Price: {{ item.price }}</p>
              <p class="text-sm text-gray-500">Quantity:</p>
              <input
                type="number"
                v-model="item.quantity"
                min="1"
                class="w-16 text-center border rounded"
                @change="updateQuantity(index)"
              />
            </div>
          </div>
          <div class="text-right">
            <button @click="removeItem(index)" class="text-red-500">
              Remove
            </button>
          </div>
        </div>
        <div class="mt-4 text-xl font-bold">
          Total Price: Ksh {{ totalPrice }}
        </div>
        <button class="mt-4 bg-green-500 text-white px-4 py-2 rounded">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrayComponent",
  data() {
    return {
      items: JSON.parse(localStorage.getItem("selectedItems")) || [], // Load items from local storage or initialize to an empty array
    };
  },
  computed: {
    totalPrice() {
      return this.items.reduce(
        (total, item) =>
          total + item.quantity * parseInt(item.price.replace("Ksh ", "")),
        0
      );
    },
    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0); // Compute total number of items
    },
  },
  methods: {
    updateQuantity(index) {
      if (this.items[index].quantity < 1) {
        this.items[index].quantity = 1; // Ensure minimum quantity is 1
      }
      this.updateLocalStorage();
    },
    removeItem(index) {
      this.items.splice(index, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("selectedItems", JSON.stringify(this.items));
    },
  },
  mounted() {
    // Load items from local storage when the component is mounted
    const savedItems = JSON.parse(localStorage.getItem("selectedItems"));
    if (savedItems) {
      this.items = savedItems;
    }
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
