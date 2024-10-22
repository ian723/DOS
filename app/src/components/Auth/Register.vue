<template>
  <div class="p-8">
    <h2 class="text-2xl mb-4">Sign Up</h2>

    <form @submit.prevent="register">
      <!-- Name Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Name</label>
        <input
          v-model="name"
          type="text"
          class="border p-2 rounded w-full"
          placeholder="Enter your name"
        />
      </div>

      <!-- Email Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input
          v-model="email"
          type="email"
          class="border p-2 rounded w-full"
          placeholder="Enter your email"
        />
      </div>

      <!-- Password Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Password</label>
        <input
          v-model="password"
          type="password"
          class="border p-2 rounded w-full"
          placeholder="Enter your password"
        />
      </div>

      <!-- Confirm Password Field -->
      <div class="mb-4">
        <label class="block text-sm font-medium">Confirm Password</label>
        <input
          v-model="confirmPassword"
          type="password"
          class="border p-2 rounded w-full"
          placeholder="Confirm your password"
        />
      </div>

      <!-- Submit Button -->
      <div>
        <button
          type="submit"
          class="bg-green-500 text-white p-2 rounded hover:bg-green-600 w-full"
        >
          Sign Up
        </button>
      </div>
    </form>

    <!-- Display error message if registration fails -->
    <div v-if="errorMessage" class="text-red-500 mt-4">{{ errorMessage }}</div>

    <!-- Link to login page -->
    <div class="mt-4">
      <router-link to="/login" class="text-blue-500 hover:underline">
        Already have an account? Login
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios"; 
export default {
  name: "RegisterPage",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      errorMessage: "",
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = "Passwords do not match!";
        return;
      }

      try {
        const response = await axios.post("/api/register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        // Assuming the response contains a token
        const token = response.data.token;

        // Save the token in localStorage
        localStorage.setItem("authToken", token);

        // Redirect the user to the account page (or another page)
        this.$router.push("/account");
      } catch (error) {
        // Handle error (e.g., email already taken)
        this.errorMessage =
          error.response.data.message || "Registration failed.";
      }
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
