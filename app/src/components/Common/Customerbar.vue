<template>
  <aside class="w-full md:w-1/5 bg-gray-200 p-4 flex flex-col space-y-4">
    <router-link
      to="/dash"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
      exact
    >
      Dashboard
    </router-link>
    <router-link
      to="#"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Food Order
    </router-link>
    <router-link
      to="#"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Order history
    </router-link>
    <router-link
      to="#"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Bills
    </router-link>
    <router-link
      to="#"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Reviews
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "Customerbar",
};
</script>
