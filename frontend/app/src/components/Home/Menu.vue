<template>
  <div class="bg-black p-4 md:p-8">
    <!-- Notification for added items -->
    <div
      v-if="notificationMessage"
      class="bg-green-500 text-white p-2 rounded mb-4"
    >
      {{ notificationMessage }}
    </div>

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
              class="mt-2 text-white px-2 py-1 rounded"
              :class="item.addedToTray ? 'bg-green-500' : 'bg-blue-500'"
            >
              {{ item.addedToTray ? "Added" : "Add to Tray" }}
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
              addedToTray: false,
            },
            {
              name: "Espresso",
              price: "Ksh 60",
              quantity: 1,
              image: "path/to/espresso.jpg",
              addedToTray: false,
            },
            {
              name: "Latte",
              price: "Ksh 80",
              quantity: 1,
              image: "path/to/latte.jpg",
              addedToTray: false,
            },
            {
              name: "Cappuccino",
              price: "Ksh 100",
              quantity: 1,
              image: "path/to/cappuccino.jpg",
              addedToTray: false,
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
              addedToTray: false,
            },
            {
              name: "Sandwich",
              price: "Ksh 50",
              quantity: 1,
              image: "path/to/sandwich.jpg",
              addedToTray: false,
            },
            {
              name: "Pancake",
              price: "Ksh 20",
              quantity: 1,
              image: "path/to/pancake.jpg",
              addedToTray: false,
            },
            {
              name: "Croissant",
              price: "Ksh 40",
              quantity: 1,
              image: "path/to/croissant.jpg",
              addedToTray: false,
            },
          ],
        },
      ],
      notificationMessage: "", 
    };
  },
  methods: {
    addToTray(item) {
      // Add item to tray logic
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

      // Set the addedToTray flag to true
      item.addedToTray = true;

      // Show notification message
      this.notificationMessage = `${item.name} added to tray`;

      // Clear the message and revert button after 1 seconds
      setTimeout(() => {
        this.notificationMessage = ""; 
        item.addedToTray = false;
      }, 1000);
    },
    toggleViewAll(category) {
      category.showAll = !category.showAll; 
    },
    limitedItems(category) {
      return category.showAll ? category.items : category.items.slice(0, 4);
    },
  },
};
</script>
