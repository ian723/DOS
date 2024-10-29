<template>
  <div>
    <p class="text-xl text-center p-4">Register a new account</p>
    <form @submit.prevent="onSubmit">
      <p class="p-2 text-lg">Name</p>
      <input
        type="text"
        v-model="formData.name"
        :class="{ 'border-2 border-red-500': v$.name.$error }"
        class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
      />
      <p v-if="v$.name.$error" class="text-red-500">
        {{ v$.name.$errors[0].$message }}
      </p>

      <p class="p-2 text-lg">E-mail</p>
      <input
        type="email"
        v-model="formData.email"
        :class="{ 'border-2 border-red-500': v$.email.$error }"
        class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
      />
      <p v-if="v$.email.$error" class="text-red-500">
        {{ v$.email.$errors[0].$message }}
      </p>

      <p class="p-2 text-lg">Password</p>
      <input
        type="password"
        v-model="formData.password"
        :class="{ 'border-2 border-red-500': v$.password.$error }"
        class="w-full md:w-[350px] border border-gray-400 p-2 rounded-md"
      />
      <p v-if="v$.password.$error" class="text-red-500">
        {{ v$.password.$errors[0].$message }}
      </p>

      <button
        class="text-white bg-green-600 px-4 py-2 rounded-md w-full mt-4"
        :style="{
          opacity:
            v$.name.$error || v$.email.$error || v$.password.$error ? 0.5 : 1,
        }"
        :disabled="v$.name.$error || v$.email.$error || v$.password.$error"
      >
        Register
      </button>
    </form>

    <div v-if="error" class="text-red-500 mt-4">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useAuthStore } from "@/store";

const authStore = useAuthStore();

const error = computed(() => authStore.error);

const formData = reactive({
  name: "",
  email: "",
  password: "",
});

const validations = computed(() => ({
  name: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
}));

const v$ = useVuelidate(validations, formData);

const onSubmit = async () => {
  await v$.value.$validate();
  if (!v$.value.$error) {
    await authStore.register(formData);
  }
};
</script>
