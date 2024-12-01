<template>
    <div class="flex justify-between items-center bg-gray-800 rounded-lg p-4">
      <div>
        <p class="text-lg font-bold">{{ order.number }}</p>
        <p class="text-gray-400">{{ order.date }}</p>
      </div>
      <p class="text-lg font-bold">Ksh {{ order.total }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderCard",
    props: {
      order: Object,
    },
  };
  </script>
  