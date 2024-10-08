<template>
  <div class="bg-gray-100">
    <!-- Main Content Wrapper -->
    <div class="flex flex-col md:flex-row">
      <!-- Sidebar (Collapsible for Mobile) -->
      <aside class="w-full md:w-1/5 bg-gray-400 p-4">
        <h3 class="text-xl mb-4">Categories</h3>
        <ul class="space-y-2">
          <!-- Using Vue RouterLink instead of a -->
          <li>
            <router-link to="#" class="hover:underline">Breakfast</router-link>
          </li>
          <li>
            <router-link to="#" class="hover:underline">Snacks</router-link>
          </li>
          <li>
            <router-link to="#" class="hover:underline">Drinks</router-link>
          </li>
          <li>
            <router-link to="#" class="hover:underline">Lunch</router-link>
          </li>
          <li>
            <router-link to="#" class="hover:underline">Fruits</router-link>
          </li>
        </ul>
      </aside>

      <!-- Main Content Area -->
      <main class="flex-grow p-4 md:p-8">
        <h2 class="text-xl mb-4">Categories</h2>

        <!-- Category Icons (Responsive Layout) -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          <div class="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Breakfast"
              class="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p class="mt-2">Breakfast</p>
          </div>
          <div class="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Snacks"
              class="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p class="mt-2">Snacks</p>
          </div>
          <div class="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Drinks"
              class="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p class="mt-2">Drinks</p>
          </div>
          <div class="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Lunch"
              class="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p class="mt-2">Lunch</p>
          </div>
          <div class="text-center">
            <img
              src="https://via.placeholder.com/100"
              alt="Fruits"
              class="w-24 h-24 object-cover rounded-lg mx-auto"
            />
            <p class="mt-2">Fruits</p>
          </div>
        </div>

        <!-- Popular Dishes Section (Responsive Layout) -->
        <h2 class="text-xl mb-4">Popular Dishes</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div class="border border-gray-400 p-4 rounded-lg text-center">
            <p>Ugali & Fish</p>
          </div>
          <div class="border border-gray-400 p-4 rounded-lg text-center">
            <p>Pilau</p>
          </div>
          <div class="border border-gray-400 p-4 rounded-lg text-center">
            <p>Chicken & Chips</p>
          </div>
          <div class="border border-gray-400 p-4 rounded-lg text-center">
            <p>Ugali & Chicken</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuComponent",
};
</script>

<style scoped>
/* Custom styles if necessary */
</style>
