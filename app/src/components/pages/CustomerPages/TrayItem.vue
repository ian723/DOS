<template>
    <div class="flex justify-between items-center bg-white rounded-lg p-2">
      <div class="flex items-center">
        <img :src="`/images/${item.image}`" alt="flag" class="w-8 h-8 mr-2 rounded-full" />
        <div>
          <p>{{ item.name }}</p>
          <p class="text-sm text-gray-500">{{ item.quantity }}</p>
        </div>
      </div>
      <p class="font-bold">Kshs {{ item.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "TrayItem",
    props: {
      item: Object,
    },
  };
  </script>
  
  <style scoped></style>
  