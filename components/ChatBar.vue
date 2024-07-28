<template>
  <div class="bg-gray-800 text-white p-6 rounded-lg">
    <div>
      <div
        class="flex space-x-4 my-2 hover:bg-gray-700 cursor-pointer p-2 rounded-lg"
      >
        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" />

        <div>
          <p class="text-sm text-gray-400">Name</p>
        </div>
      </div>
      <div
        v-for="user in activeUserDummyData"
        :key="user.username"
        class="flex space-x-4 my-2 hover:bg-gray-700 cursor-pointer p-2 hover:rounded-lg hover:border-none border-b border-gray-600 last:border-none"
      >
        <input
          type="checkbox"
          class="form-checkbox h-5 w-5 text-blue-600"
          v-model="user.checked"
        />
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
