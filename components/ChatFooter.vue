<template>
  <div class="bg-gray-100 p-4 border-t border-gray-200">
    <form @submit.prevent="handleSendMessage" class="flex items-center">
      <input
        type="text"
        placeholder="Write message"
        class="flex-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        v-model="message"
        @keydown="handleTyping"
      />
      <button
        type="submit"
        class="ml-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        SEND
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/users";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
const userStore = useUserStore();
const message = ref("");

const handleTyping = () => {
  socket.emit("typing", `${localStorage.getItem("userName")} is typing`);
};

const handleSendMessage = () => {
  if (message.value.trim() && localStorage.getItem("userName")) {
    socket.emit("message", {
      text: message.value,
      name: localStorage.getItem("userName"),
      id: `${socket.id}${Math.random()}`,
      socketID: socket.id,
    });
    message.value = "";
  }
};
</script>
