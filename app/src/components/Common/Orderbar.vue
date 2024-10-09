<template>
  <div class="flex space-x-4 mb-6">
    <router-link
      to="/orders"
      class="text-white"
      active-class="text-yellow-500 border-b-2 border-yellow-500"
    >
      Orders
    </router-link>
    <router-link
      to="/preparing"
      class="text-white"
      active-class="text-yellow-500 border-b-2 border-yellow-500"
    >
      Preparing
    </router-link>
    <router-link
      to="/delivery"
      class="text-white"
      active-class="text-yellow-500 border-b-2 border-yellow-500"
    >
      Deliveries
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Orderbar",
};
</script>

<style scoped></style>
