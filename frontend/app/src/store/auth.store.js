import { ref } from "vue";
import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";
import { fetchWrapper } from "../helpers";
import { post, get } from "../providers/api/main";
import router from "../router";

const baseUrl = `${import.meta.env.VITE_API_URL}`;
const mode = `${import.meta.env.VITE_MODE}`;

export const useAuthStore = defineStore("auth", () => {
  const user = ref(useLocalStorage("user", null));
  const access_token = ref(useLocalStorage("x-token", null));
  const returnUrl = ref(null);
  const error = ref(null);
  let login;
  let register;

  /** Login method for local instance */
  async function login_local(formData) {
    const username = formData.email;
    const password = formData.password;
    console.log("This is the formData in store", { username, password });

    try {
      const fetchedUser = await fetchWrapper.post(`${baseUrl}/login`, {
        username,
        password,
      });

      // Update pinia state
      user.value = JSON.stringify(fetchedUser);

      // Redirect to previous URL or default to homepage
      router.push(returnUrl.value || "/");
    } catch (err) {
      console.error(err);
      error.value = err.response ? err.response.data.message : err.message;
    }
  }

  /** Login method for remote instance */
  async function login_remote(credentials) {
    try {
      const response = await post("login", credentials);

      console.log(response);
      user.value = response.data.user
        ? JSON.stringify(response.data.user)
        : null;

      // Capture the access token
      access_token.value = response.data ? response.data.token : null;

      // Redirect to previous URL or default to homepage
      router.push(returnUrl.value || "/");
    } catch (err) {
      console.error(err);
      error.value = err.response ? err.response.data.message : err.message;
    }
  }

  /** Register method for local instance */
  async function register_local(formData) {
    const { email: username, password, name } = formData;

    try {
      const fetchedUser = await fetchWrapper.post(`${baseUrl}/register`, {
        username,
        password,
        name,
      });

      console.log("Registration successful:", fetchedUser);
      user.value = JSON.stringify(fetchedUser);

      // Redirect to login page after registration
      router.push("/login");
    } catch (err) {
      console.error(err);
      error.value = err.response ? err.response.data.message : err.message;
    }
  }

  /** Register method for remote instance */
  async function register_remote(credentials) {
    try {
      const response = await post("register", credentials);

      console.log("Registration successful:", response);
      user.value = response.data.user
        ? JSON.stringify(response.data.user)
        : null;

      // Redirect to login page after registration
      router.push("/login");
    } catch (err) {
      console.error(err);
      error.value = err.response ? err.response.data.message : err.message;
    }
  }

  /** Test API */
  async function test() {
    try {
      const response = await get("shops");
      console.log(response);
      // Uncomment if needed to log out on forbidden access
      // if(response.data.responseStatus === 403) logout();
    } catch (err) {
      console.error(err);
    }
  }

  /** Logout */
  function logout() {
    user.value = null;
    access_token.value = null;
    router.push("/login");
  }

  /** Set login and register methods based on mode */
  if (mode === "local") {
    login = login_local;
    register = register_local;
  } else if (mode === "remote") {
    login = login_remote;
    register = register_remote;
  }

  return {
    user,
    access_token,
    returnUrl,
    error,
    test,
    login,
    register,
    logout,
  };
});
