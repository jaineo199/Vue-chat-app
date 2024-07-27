<template>
  <form @submit.prevent="handleSubmit" class="home__container">
    <h2 class="home__header">Sign in to Open Chat</h2>
    <label for="username">Username</label>
    <input
      type="text"
      minlength="6"
      name="username"
      id="username"
      class="username__input"
      v-model="userName"
    />
    <button class="home__cta">SIGN IN</button>
  </form>
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
