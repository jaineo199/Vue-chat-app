<template>
  <div class="flex flex-col h-full">
    <header
      class="bg-gray-800 text-white p-4 flex justify-between items-center"
    >
      <p class="text-lg font-semibold">Hangout with Colleagues</p>
      <button
        class="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
        @click="handleLeaveChat"
      >
        LEAVE CHAT
      </button>
    </header>

    <div class="flex-1 overflow-y-auto p-4 bg-gray-100">
      <div v-for="message in messages" :key="message.id" class="mb-4">
        <p class="font-semibold text-gray-800" v-if="message.name === userName">
          You
        </p>
        <p v-else class="font-semibold text-gray-600">
          {{ message.name }}
        </p>
        <div
          :class="{
            'bg-blue-500 text-white': message.name === userName,
            'bg-gray-300 text-gray-800': message.name !== userName,
          }"
          class="rounded-lg p-2 mt-1 max-w-xs inline-block"
        >
          <p>{{ message.text }}</p>
        </div>
      </div>
      <div class="text-gray-500 text-sm mt-2">{{ typingStatus }}</div>
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
