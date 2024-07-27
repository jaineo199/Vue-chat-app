<template>
  <div class="chat__sidebar">
    <h2>Open Chat</h2>
    <div>
      <h4 class="chat__header">ACTIVE USERS</h4>
      <div class="chat__users">
        <p v-for="user in users" :key="user.socketID">{{ user.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "~/stores/user";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
const userStore = useUserStore();

onMounted(() => {
  socket.on("newUserResponse", (data) => {
    userStore.setUsers(data);
  });
});

const users = userStore.users;
</script>
