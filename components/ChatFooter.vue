<template>
  <div class="chat__footer">
    <form @submit.prevent="handleSendMessage" class="form">
      <input
        type="text"
        placeholder="Write message"
        class="message"
        v-model="message"
        @keydown="handleTyping"
      />
      <button class="sendBtn">SEND</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "~/stores/user";
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
