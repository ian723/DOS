<template>
    <div ref="map" class="h-64 w-full rounded"></div>
  </template>
  
  <script>
  export default {
    name: "OrderMap",
    props: {
      location: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.initMap();
    },
    watch: {
      location: {
        handler() {
          this.updateMap();
        },
        deep: true,
      },
    },
    methods: {
      initMap() {
        this.map = new google.maps.Map(this.$refs.map, {
          center: this.location,
          zoom: 15,
        });
  
        this.marker = new google.maps.Marker({
          position: this.location,
          map: this.map,
        });
      },
      updateMap() {
        this.map.setCenter(this.location);
        this.marker.setPosition(this.location);
      },
    },
  };
  </script>
  