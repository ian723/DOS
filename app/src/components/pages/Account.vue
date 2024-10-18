<template>
  <div class="p-8">
    <h2 class="text-2xl mb-4">Your Account</h2>

    <form @submit.prevent="saveChanges">
      <!-- Name Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Name</label>
        <input
          v-model="account.name"
          type="text"
          class="border p-2 rounded w-full"
        />
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="account.email"
          type="email"
          class="border p-2 rounded w-full"
        />
      </div>

      <!-- Password Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Password</label>
        <input
          v-model="account.password"
          type="password"
          class="border p-2 rounded w-full"
        />
      </div>

      <!-- Save / Cancel Buttons -->
      <div class="flex space-x-4">
        <button
          type="submit"
          class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
        <button
          @click="cancelEdit"
          type="button"
          class="bg-gray-500 text-white p-2 rounded hover:bg-gray-600"
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "AccountPage",
  data() {
    return {
      account: {
        name: "",
        email: "",
        password: "",
      },
    };
  },
  created() {
    this.fetchAccountInfo(); // Fetch account info when component is created
  },
  methods: {
    fetchAccountInfo() {
      // Fetch user info from the backend (use actual API call)
      const userData = {
        name: "John Doe", // Example data; replace with real data from backend
        email: "john@example.com",
        password: "********",
      };
      this.account = userData;
    },
    saveChanges() {
      // Send the updated account information to the backend
      // Example: axios.post('/api/account', this.account)
      alert("Changes saved!");
    },
    cancelEdit() {
      // Reload the original account information
      this.fetchAccountInfo();
      alert("Changes cancelled!");
    },
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: auto;
}
</style>
