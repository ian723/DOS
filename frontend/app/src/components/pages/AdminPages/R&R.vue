<template>
  <div class="flex flex-col lg:flex-row min-h-screen">
    <!-- Sidebar -->
    <Adminbar />

    <!-- Main Content -->
    <div class="flex-1 bg-black text-white p-8">
      <h2 class="text-2xl lg:text-3xl mb-6">Hi, Savannah</h2>

      <!-- Reviews Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <!-- Review Cards -->
        <div
          class="bg-gray-200 p-4 rounded-lg text-black space-y-4"
          v-for="(review, index) in paginatedReviews"
          :key="index"
        >
          <!-- User Info -->
          <div class="flex items-center space-x-4">
            <div class="bg-orange-400 w-10 h-10 rounded-full"></div>
            <div>
              <h4 class="font-semibold">{{ review.user }}</h4>
              <span class="text-sm text-gray-600">{{ review.since }}</span>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex">
            <span
              v-for="star in 5"
              :key="star"
              class="text-yellow-400"
              v-if="star <= review.rating"
              >★</span
            >
            <span
              v-for="star in 5"
              :key="'empty' + star"
              class="text-gray-400"
              v-if="star > review.rating"
              >★</span
            >
          </div>

          <!-- Review Text -->
          <p class="text-gray-700">{{ review.text }}</p>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="flex justify-end mt-6">
        <button
          class="px-4 py-2 bg-gray-300 text-black rounded mr-2 hover:bg-gray-400 transition-colors"
          :disabled="currentPage === 1"
          @click="prevPage"
        >
          Prev
        </button>
        <button
          class="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition-colors"
          :disabled="currentPage === totalPages"
          @click="nextPage"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Adminbar from "../../Common/Adminbar.vue";

export default {
  name: "RatesAndReviews",
  components: {
    Adminbar,
  },
  data() {
    return {
      reviews: [
        {
          user: "User1",
          since: "Since 2020",
          rating: 4,
          text: "The food was amazing but the delivery guy was rude.",
        },
        {
          user: "User2",
          since: "Since 2019",
          rating: 5,
          text: "Loved the service and food quality was top-notch!",
        },
        {
          user: "User3",
          since: "Since 2021",
          rating: 3,
          text: "The food was decent, but delivery was delayed.",
        },
        {
          user: "User4",
          since: "Since 2018",
          rating: 2,
          text: "Not satisfied. The food was cold and delivery took too long.",
        },
        {
          user: "User5",
          since: "Since 2022",
          rating: 5,
          text: "Best food delivery experience I've had in a while.",
        },
        {
          user: "User6",
          since: "Since 2020",
          rating: 4,
          text: "Good food but delivery could be faster.",
        },
        {
          user: "User7",
          since: "Since 2017",
          rating: 5,
          text: "Exceptional food and service. Highly recommend!",
        },
        {
          user: "User8",
          since: "Since 2016",
          rating: 3,
          text: "Average experience, delivery was okay but could improve.",
        },
        {
          user: "User9",
          since: "Since 2015",
          rating: 4,
          text: "Great food but expensive delivery fees.",
        },
      ],
      currentPage: 1,
      itemsPerPage: 3,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.reviews.length / this.itemsPerPage);
    },
    paginatedReviews() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.reviews.slice(start, end);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
  },
};
</script>

<style scoped></style>
