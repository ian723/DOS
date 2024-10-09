
<template>
    <aside class="w-1/5 bg-gray-200 p-4 flex flex-col space-y-4">
      <router-link
        to="/dashboard"
        class="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Dashboard
      </router-link>
      <router-link
        to="/orders"
        class="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Order List
      </router-link>
      <router-link
        to="/payment"
        class="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Payment
      </router-link>
      <router-link
        to="/analysis"
        class="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Analysis
      </router-link>
      <router-link
        to="/rates"
        class="bg-yellow-400 text-gray-800 py-2 px-4 rounded hover:bg-yellow-500"
      >
        Rates & Rvs
      </router-link>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Sidebar",
  };
  </script>
  