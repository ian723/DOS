<template>
  <div class="bg-black p-4 md:p-8">
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
          <button
            @click="toggleViewAll(category)"
            class="text-sm text-gray-500 hover:underline"
          >
            {{ category.showAll ? "View less" : "View all" }}
          </button>
        </div>

        <!-- Menu Items Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            v-for="(item, index) in limitedItems(category)"
            :key="index"
            class="bg-white p-4 rounded-lg text-center"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 bg-gray-300 rounded-full mx-auto mb-4"
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
              }"
            ></div>
            <p class="text-sm md:text-base font-bold">{{ item.name }}</p>
            <p class="text-sm text-gray-500">{{ item.price }}</p>
            <button
              @click="addToTray(item)"
              class="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Add to Tray
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuCategories: [
        {
          name: "Drinks",
          showAll: false,
          items: [
            {
              name: "Black Coffee",
              price: "Ksh 40",
              quantity: 1,
              image: "path/to/coffee.jpg",
            },
            {
              name: "Espresso",
              price: "Ksh 60",
              quantity: 1,
              image: "path/to/espresso.jpg",
            },
            {
              name: "Latte",
              price: "Ksh 80",
              quantity: 1,
              image: "path/to/latte.jpg",
            },
            {
              name: "Cappuccino",
              price: "Ksh 100",
              quantity: 1,
              image: "path/to/cappuccino.jpg",
            },
            {
              name: "Cappuccino",
              price: "Ksh 100",
              quantity: 1,
              image: "path/to/cappuccino.jpg",
            },
          ],
        },
        {
          name: "Snacks",
          showAll: false,
          items: [
            {
              name: "Samosa",
              price: "Ksh 30",
              quantity: 1,
              image: "path/to/samosa.jpg",
            },
            {
              name: "Sandwich",
              price: "Ksh 50",
              quantity: 1,
              image: "path/to/sandwich.jpg",
            },
            {
              name: "Pancake",
              price: "Ksh 20",
              quantity: 1,
              image: "path/to/pancake.jpg",
            },
            {
              name: "Croissant",
              price: "Ksh 40",
              quantity: 1,
              image: "path/to/croissant.jpg",
            },
          ],
        },
        {
          name: "Lunch",
          showAll: false,
          items: [
            {
              name: "Chicken & Chips",
              price: "Ksh 150",
              quantity: 1,
              image: "path/to/chicken-chips.jpg",
            },
            {
              name: "Pilau",
              price: "Ksh 120",
              quantity: 1,
              image: "path/to/pilau.jpg",
            },
            {
              name: "Beef Stew",
              price: "Ksh 100",
              quantity: 1,
              image: "path/to/beef-stew.jpg",
            },
            {
              name: "Ugali & Fish",
              price: "Ksh 200",
              quantity: 1,
              image: "path/to/ugali-fish.jpg",
            },
          ],
        },
        {
          name: "Fruits",
          showAll: false,
          items: [
            {
              name: "Banana",
              price: "Ksh 10",
              quantity: 1,
              image: "path/to/banana.jpg",
            },
            {
              name: "Apple",
              price: "Ksh 20",
              quantity: 1,
              image: "path/to/apple.jpg",
            },
            {
              name: "Mango",
              price: "Ksh 30",
              quantity: 1,
              image: "path/to/mango.jpg",
            },
            {
              name: "Orange",
              price: "Ksh 15",
              quantity: 1,
              image: "path/to/orange.jpg",
            },
          ],
        },
      ],
    };
  },
  methods: {
    addToTray(item) {
      let selectedItems =
        JSON.parse(localStorage.getItem("selectedItems")) || [];
      const existingItemIndex = selectedItems.findIndex(
        (selectedItem) => selectedItem.name === item.name
      );

      if (existingItemIndex > -1) {
        selectedItems[existingItemIndex].quantity += item.quantity;
      } else {
        selectedItems.push({ ...item });
      }

      localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    },
    toggleViewAll(category) {
      category.showAll = !category.showAll; // Toggle the showAll property
    },
    limitedItems(category) {
      return category.showAll ? category.items : category.items.slice(0, 4);
    },
  },
};
</script>
