<template>
  <aside class="w-full md:w-1/5 bg-gray-200 p-4 flex flex-col space-y-4">
    <router-link
      to="/dashboard"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
      exact
    >
      Dashboard
    </router-link>
    <router-link
      to="/orders"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Order List
    </router-link>
    <router-link
      to="/payment"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Payment
    </router-link>
    <router-link
      to="/analysis"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Analysis
    </router-link>
    <router-link
      to="/rates"
      class="py-2 px-4 rounded hover:bg-yellow-500"
      active-class="bg-yellow-500 text-white"
    >
      Rates & Rvs
    </router-link>
  </aside>
</template>

<script>
export default {
  name: "Adminbar",
};
</script>
