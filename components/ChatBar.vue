<template>
  <div class="bg-gray-800 text-white p-6 rounded-lg">
    <h2 class="text-xl font-bold mb-4">Open Chat</h2>
    <div>
      <h4 class="text-lg font-semibold mb-2">ACTIVE USERS</h4>
      <div
        v-for="user in activeUserDummyData"
        :key="user.username"
        class="flex items-center space-x-4 my-2"
      >
        <img
          :src="user.image"
          alt="User Image"
          class="w-10 h-10 rounded-full"
        />
        <div>
          <p class="text-md font-medium">{{ user.name }}</p>
          <p class="text-sm text-gray-400">{{ user.username }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "../stores/users";
import { io } from "socket.io-client";
import { activeUserDummyData } from "../utils/dummyData";

const socket = io("http://localhost:4000");
const userStore = useUserStore();

onMounted(() => {
  socket.on("newUserResponse", (data) => {
    userStore.setUsers(data);
  });
});

const users = userStore.users;
</script>
