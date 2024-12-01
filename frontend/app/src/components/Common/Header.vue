<template>
  <div>
    <!-- Header Section -->
    <header
      class="bg-gray-400 p-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
    >
      <!-- Logo and Centered Search -->
      <div
        class="flex flex-col md:flex-row items-center justify-center md:justify-between w-full md:w-auto md:space-x-4"
      >
        <!-- Logo with router-link -->
        <router-link to="/" class="text-2xl font-bold mb-2 md:mb-0">
          DOS
        </router-link>

        <!-- Centered Search Bar -->
        <div class="relative flex-grow w-full md:w-auto mx-auto">
          <input
            type="text"
            placeholder="Search..."
            class="bg-white text-black w-full p-2 rounded-lg pl-10"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute left-2 top-2 w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 4a6 6 0 100 12 6 6 0 000-12zm0 0l4.5 4.5"
            />
          </svg>
        </div>
      </div>

      <!-- Account and Tray (on the right) -->
      <div class="flex items-center space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/admin" class="hover:underline">Admin</router-link>
        <router-link to="/customer" class="hover:underline"
          >Customer</router-link
        >

        <!-- Conditionally show Account link if loggedIn is true -->
        <router-link v-if="loggedIn" to="/account" class="hover:underline"
          >Account</router-link
        >

        <!-- Show Logout option if logged in -->
        <button v-if="loggedIn" @click="logout" class="hover:underline">
          Logout
        </button>

        <!-- Show Login/Sign In option if not logged in -->
        <router-link v-else to="/login" class="hover:underline"
          >Login</router-link
        >
        <router-link to="/register" class="hover:underline"
          >Sign in</router-link
        >

        <!-- Cart Icon with Dynamic Item Count -->
        <div class="relative">
          <router-link to="/tray">
            <img
              src="https://t3.ftcdn.net/jpg/01/13/95/02/360_F_113950213_2znQQrapC21FcNXfvqwjnXm5gs6jDi06.jpg"
              alt="Cart"
              class="w-10 h-10"
            />
            <span
              v-if="totalItems > 0"
              class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center"
            >
              {{ totalItems }}
            </span>
          </router-link>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      items: JSON.parse(localStorage.getItem("selectedItems")) || [], // Cart items
    };
  },
  computed: {
    loggedIn() {
      // Check if the user is logged in
      return !!localStorage.getItem("authToken"); // Example check
    },
    totalItems() {
      // Calculate total number of items in the cart
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
  },
  methods: {
    logout() {
      // Clear the token from localStorage
      localStorage.removeItem("authToken");

      // Redirect to home or login page
      this.$router.push("/login");
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
/* Add some basic styling for the cart icon */
.cart-icon {
  position: relative;
}

.cart-icon img {
  width: 40px;
  height: 40px;
}

.cart-icon .badge {
  position: absolute;
  top: 0;
  right: 0;
  background-color: red;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
}
</style>
