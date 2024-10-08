<template>
  <footer class="bg-black text-white p-8">
    <!-- DOS Heading -->
    <div class="max-w-xl mx-auto mb-8">
      <h1 class="text-xl font-bold">DOS</h1>
    </div>

    <!-- Signup section -->
    <div
      class="bg-gray-300 rounded-lg flex items-center justify-between p-4 max-w-xl mx-auto mb-8"
    >
      <input
        type="text"
        placeholder="Sign up and get the best offers"
        class="bg-transparent outline-none flex-grow text-black placeholder-gray-500 px-2"
      />
      <button class="bg-white rounded-full p-2 w-10 h-10"></button>
    </div>

    <!-- Links section -->
    <div class="grid grid-cols-2 text-left max-w-xl mx-auto">
      <div>
        <h3 class="mb-4">Contact</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Facebook</a></li>
          <li><a href="#" class="hover:underline">Twitter</a></li>
          <li><a href="#" class="hover:underline">WhatsApp</a></li>
          <li><a href="#" class="hover:underline">Instagram</a></li>
        </ul>
      </div>
      <div>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">About us</a></li>
          <li><a href="#" class="hover:underline">Privacy Policy</a></li>
          <li><a href="#" class="hover:underline">Terms and Conditions</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>
