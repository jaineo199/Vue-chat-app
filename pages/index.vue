<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <form
      @submit.prevent="handleSubmit"
      class="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
    >
      <h2 class="text-2xl font-bold mb-6 text-center text-gray-800">
        Sign in to Open Chat
      </h2>
      <label for="username" class="block text-gray-700 text-sm font-medium mb-2"
        >Username</label
      >
      <input
        type="text"
        minlength="6"
        name="username"
        id="username"
        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        v-model="userName"
        placeholder="Enter your username"
      />
      <button
        type="submit"
        class="mt-4 w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        SIGN IN
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/users";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
const userStore = useUserStore();
const userName = ref("");
const router = useRouter();

const handleSubmit = () => {
  userStore.setUserName(userName.value);
  socket.emit("newUser", { userName: userName.value, socketID: socket.id });
  router.push("/chat");
};
</script>
