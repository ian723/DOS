<template>
  <div class="min-h-screen bg-black p-4 md:p-8">
    <!-- Menu Section -->
    <div class="bg-gray-200 p-4 md:p-6 rounded-lg">
      <h1 class="text-xl md:text-2xl font-bold mb-4 md:mb-6">Menu</h1>

      <!-- Category Section (e.g., Drinks) -->
      <div
        v-for="category in menuCategories"
        :key="category.name"
        class="mb-6 md:mb-8"
      >
        <div class="flex justify-between items-center mb-2 md:mb-4">
          <h2 class="text-lg md:text-xl">{{ category.name }}</h2>
          <router-link
            :to="'/' + category.name.toLowerCase()"
            class="text-sm text-gray-500 hover:underline"
          >
            View all
          </router-link>
        </div>

        <!-- Menu Items Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in category.items"
            :key="index"
            class="bg-white p-4 rounded-lg text-center"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mx-auto mb-4"
            ></div>
            <p class="text-sm md:text-base font-bold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.price }}</p>
            <!-- Quantity Controls -->
            <div class="flex justify-center items-center mt-2">
              <button
                @click="decreaseQuantity(category.name, index)"
                class="text-lg font-bold"
              >
                -
              </button>
              <span class="mx-2">{{ item.quantity }}</span>
              <button
                @click="increaseQuantity(category.name, index)"
                class="text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
  data() {
    return {
      menuCategories: [
        {
          name: "Drinks",
          items: [
            { name: "Black Coffee", price: "Ksh 40", quantity: 0 },
            { name: "Espresso", price: "Ksh 60", quantity: 0 },
            { name: "Latte", price: "Ksh 80", quantity: 0 },
            { name: "Cappuccino", price: "Ksh 100", quantity: 0 },
          ],
        },
        {
          name: "Snacks",
          items: [
            { name: "Samosa", price: "Ksh 30", quantity: 0 },
            { name: "Sandwich", price: "Ksh 50", quantity: 0 },
            { name: "Pancake", price: "Ksh 20", quantity: 0 },
            { name: "Croissant", price: "Ksh 40", quantity: 0 },
          ],
        },
        {
          name: "Lunch",
          items: [
            { name: "Chicken & Chips", price: "Ksh 150", quantity: 0 },
            { name: "Pilau", price: "Ksh 120", quantity: 0 },
            { name: "Beef Stew", price: "Ksh 100", quantity: 0 },
            { name: "Ugali & Fish", price: "Ksh 200", quantity: 0 },
          ],
        },
        {
          name: "Fruits",
          items: [
            { name: "Banana", price: "Ksh 10", quantity: 0 },
            { name: "Apple", price: "Ksh 20", quantity: 0 },
            { name: "Mango", price: "Ksh 30", quantity: 0 },
            { name: "Orange", price: "Ksh 15", quantity: 0 },
          ],
        },
      ],
    };
  },
  methods: {
    increaseQuantity(categoryName, itemIndex) {
      const category = this.menuCategories.find(
        (cat) => cat.name === categoryName
      );
      if (category) {
        category.items[itemIndex].quantity++;
      }
    },
    decreaseQuantity(categoryName, itemIndex) {
      const category = this.menuCategories.find(
        (cat) => cat.name === categoryName
      );
      if (category && category.items[itemIndex].quantity > 0) {
        category.items[itemIndex].quantity--;
      }
    },
  },
};
</script>
