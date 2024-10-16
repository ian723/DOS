<template>
  <div class="flex flex-col lg:flex-row min-h-screen ">
    <!-- Sidebar -->
    <Adminbar />

    <!-- Main Content -->
    <div class="flex-1 bg-black text-white p-8">
      <h2 class="text-2xl lg:text-3xl mb-6">Hi, Savannah</h2>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <!-- Left Section (Performance and Order Stats) -->
        <div class="lg:col-span-2 space-y-8">
          <!-- Performance Statistic -->
          <div class="bg-white p-6 rounded-lg">
            <div class="flex justify-between mb-4">
              <h3 class="text-lg lg:text-xl">Performance Statistic</h3>
              <span>This Month</span>
            </div>
            <!-- Chart for Performance Statistics -->
            <div style="height: 300px">
              <LineChart :chart-data="performanceChartData" />
            </div>
          </div>

          <!-- Order Rate -->
          <div class="bg-white p-6 rounded-lg">
            <div class="flex justify-between mb-4">
              <h3 class="text-lg lg:text-xl">Order Rate</h3>
              <span>This Month</span>
            </div>
            <!-- Chart for Order Rate -->
            <div style="height: 300px">
              <LineChart :chart-data="orderRateChartData" />
            </div>
          </div>
        </div>

        <!-- Right Section (Order Summary & Popular Food) -->
        <div class="space-y-8">
          <!-- Order Summary -->
          <div class="bg-gray-800 p-6 rounded-lg">
            <h3 class="text-lg lg:text-xl mb-4">Total Order Complete</h3>
            <ul class="space-y-4">
              <li class="flex justify-between">
                <span>Total Order Delivered</span>
                <span>1,234</span>
              </li>
              <li class="flex justify-between">
                <span>Total Order Canceled</span>
                <span>123</span>
              </li>
              <li class="flex justify-between">
                <span>Order Pending</span>
                <span>432</span>
              </li>
            </ul>
          </div>

          <!-- Popular Food -->
          <div class="bg-white p-6 rounded-lg">
            <h3 class="text-lg lg:text-xl mb-4">Popular Food</h3>
            <!-- Chart for Popular Food -->
            <div style="height: 300px">
              <BarChart :chart-data="popularFoodChartData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Adminbar from "../../Common/Adminbar.vue";
import LineChart from "../../Common/LineChart.vue";
import BarChart from "../../Common/BarChart.vue";
export default {
  name: "Dashboard",
  components: {
    Adminbar,
    LineChart,
    BarChart,
  },
  data() {
    return {
      // Sample data for the charts
      performanceChartData: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Performance",
            backgroundColor: "#42A5F5",
            data: [150, 200, 180, 220],
          },
        ],
      },
      orderRateChartData: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Orders",
            backgroundColor: "#FFA726",
            data: [100, 150, 200, 250],
          },
        ],
      },
      popularFoodChartData: {
        labels: ["Pizza", "Burger", "Pasta", "Sushi"],
        datasets: [
          {
            label: "Popular Food",
            backgroundColor: "#66BB6A",
            data: [30, 50, 20, 10],
          },
        ],
      },
    };
  },
};
</script>
