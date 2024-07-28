<template>
  <div class="bg-gray-800 text-white p-6 rounded-lg">
    <div class="grid grid-cols-2">
      <div class="flex col-span-1 space-x-4 my-2 p-2">
        <img
          src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt="User Image"
          class="w-10 h-10 rounded-full"
        />
        <div>
          <p class="text-md font-medium">Virat</p>
          <p class="text-sm text-gray-400">viratkohli</p>
        </div>
      </div>
      <div class="flex col-span-1 space-x-4 my-2 p-2">
        <div>
          <button
            class="flex items-center px-4 py-2 bg-black gap-x-2 border border-slate-300 text-white font-semibold rounded-md"
          >
            <span>Follow</span>
            <span class="text-lg font-bold mr-2">+</span>
          </button>
        </div>
        <div>
          <button
            class="flex items-center px-4 py-2 bg-black gap-x-2 border border-slate-300 text-white font-semibold rounded-md"
          >
            <span>Message</span>
            <Icon name="material-symbols:android-messages" />
          </button>
        </div>
      </div>
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
