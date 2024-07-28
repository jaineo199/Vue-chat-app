<template>
  <div class="bg-gray-800 text-white p-6 rounded-lg">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Open Chat</h2>
    <div>
      <h4 class="text-lg font-semibold text-gray-700 mb-2">ACTIVE USERS</h4>
      <div class="space-y-2">
        <p
          v-for="user in users"
          :key="user.socketID"
          class="text-gray-900 border-b border-gray-200 py-2"
        >
          {{ user.userName }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "../stores/users";
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
