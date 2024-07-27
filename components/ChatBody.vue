<template>
  <div>
    <header class="chat__mainHeader">
      <p>Hangout with Colleagues</p>
      <button class="leaveChat__btn" @click="handleLeaveChat">
        LEAVE CHAT
      </button>
    </header>

    <div class="message__container">
      <div v-for="message in messages" :key="message.id" class="message__chats">
        <p class="sender__name" v-if="message.name === userName">You</p>
        <p v-else>{{ message.name }}</p>
        <div
          :class="{
            message__sender: message.name === userName,
            message__recipient: message.name !== userName,
          }"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="message__status">
        <p>{{ typingStatus }}</p>
      </div>
      <div ref="lastMessageRef" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/users";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");
const userStore = useUserStore();
const router = useRouter();
const lastMessageRef = ref(null);

const handleLeaveChat = () => {
  localStorage.removeItem("userName");
  router.push("/");
  window.location.reload();
};

onMounted(() => {
  socket.on("messageResponse", (data) => {
    userStore.addMessage(data);
  });

  socket.on("typingResponse", (data) => {
    userStore.setTypingStatus(data);
  });
});

watch(userStore.messages, () => {
  lastMessageRef.value?.scrollIntoView({ behavior: "smooth" });
});

const messages = userStore.messages;
const typingStatus = userStore.typingStatus;
const userName = userStore.userName;
</script>
