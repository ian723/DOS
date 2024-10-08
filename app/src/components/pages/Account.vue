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
        name: "John Doe", // Example user data, should be fetched from a backend
        email: "john@example.com",
        password: "********",
      },
    };
  },
  methods: {
    saveChanges() {
      // Handle saving changes (e.g., send updated info to backend)
      alert("Changes saved!");
    },
    cancelEdit() {
      // Handle cancelling edit (e.g., reload original data)
      this.account = {
        name: "John Doe",
        email: "john@example.com",
        password: "********",
      };
      alert("Changes cancelled!");
    },
  },
};
</script>

<style scoped>
/* Add some styling to make the form look clean */
form {
  max-width: 400px;
  margin: auto;
}
</style>
