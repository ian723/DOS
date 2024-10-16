<template>
  <div class="flex items-center mt-4">
    <img :src="imageSrc" alt="Order Item" class="w-16 h-16 rounded-full" />
    <span class="text-xl font-semibold ml-4">{{ name }}</span>
    <span class="text-xl ml-auto">Shs {{ price }}</span>
  </div>
</template>

<script>
export default {
  name: "OrderItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>
