<template>
  <div class="flex flex-col items-center min-h-screen bg-gray-100">
    <h2 class="text-2xl font-semibold text-center p-6">Create an Account</h2>
    <div class="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
      <form @submit.prevent="onSubmit">
        <div class="mb-4">
          <label
            for="RegisterName"
            class="block text-lg font-medium text-gray-700 mb-1"
            >Name</label
          >
          <input
            type="text"
            v-model="formData.name"
            :class="{ 'border-red-500': v$.name.$error }"
            id="RegisterName"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your name"
            required
          />
          <p class="text-red-500 mt-1">
            <span v-for="error in v$.name.$errors" :key="error.$uid">{{
              error.$message
            }}</span>
          </p>
        </div>

        <div class="mb-4">
          <label
            for="RegisterEmail"
            class="block text-lg font-medium text-gray-700 mb-1"
            >E-mail</label
          >
          <input
            type="email"
            v-model="formData.email"
            :class="{ 'border-red-500': v$.email.$error }"
            id="RegisterEmail"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your email address"
            required
          />
          <p class="text-red-500 mt-1">
            <span v-for="error in v$.email.$errors" :key="error.$uid">{{
              error.$message
            }}</span>
          </p>
        </div>

        <div class="mb-4">
          <label
            for="RegisterPassword"
            class="block text-lg font-medium text-gray-700 mb-1"
            >Password</label
          >
          <input
            type="password"
            v-model="formData.password"
            :class="{ 'border-red-500': v$.password.$error }"
            id="RegisterPassword"
            class="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            required
          />
          <p class="text-red-500 mt-1">
            <span v-for="error in v$.password.$errors" :key="error.$uid">{{
              error.$message
            }}</span>
          </p>
        </div>

        <div class="flex justify-center items-end">
          <button
            type="submit"
            class="w-full bg-green-600 text-white font-semibold px-4 py-2 rounded-md transition duration-200 ease-in-out hover:bg-green-700 disabled:bg-gray-300"
            :style="{
              opacity:
                !v$.name.$error && !v$.email.$error && !v$.password.$error
                  ? 1
                  : 0.5,
            }"
            :disabled="
              !(!v$.name.$error && !v$.email.$error && !v$.password.$error)
            "
          >
            Register
          </button>
        </div>

        <div v-if="error" class="text-red-500 text-center mt-2">
          {{ error }}
        </div>
      </form>
      <p class="text-center mt-4 text-gray-600">
        Already have an account?
        <router-link to="/login" class="text-blue-600 hover:underline"
          >Log in</router-link
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useAuthStore } from "@/store";

/** Initialise the auth store */
const authStore = useAuthStore();

/** Get error from auth store */
const error = computed(() => authStore.error);

onMounted(() => {
  // Clear the previous error
  authStore.error = null;
});

/** Form variables */
const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const validations = computed(() => ({
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(3) },
}));

/** Initialise form validation */
const v$ = useVuelidate(validations, formData);

/** Submit form */
const onSubmit = async () => {
  const result = await v$.value.$validate();

  if (result) {
    console.log("Registration form submitted");
    return authStore.register(formData);
  } else {
    console.log("Registration form not submitted");
  }
};
</script>
