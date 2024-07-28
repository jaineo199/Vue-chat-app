<template>
  <div class="bg-gray-800 text-white p-6 rounded-lg h-full">
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
    <div>
      <div class="flex items-center gap-x-2">
        <p>Private note</p>
        <Icon name="material-symbols:info" />
      </div>
      <div>
        <div class="bg-gray-100 p-6 rounded-lg">
          <div class="flex space-x-2 mb-4">
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon name="mdi:format-bold" class="w-5 h-5 text-gray-700" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon name="mdi:format-italic" class="w-5 h-5 text-gray-700" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon name="mdi:format-underline" class="w-5 h-5 text-gray-700" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon name="mdi:file-upload" class="w-5 h-5 text-gray-700" />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon
                name="mdi:format-align-left"
                class="w-5 h-5 text-gray-700"
              />
            </button>
            <button class="p-2 hover:bg-gray-200 rounded">
              <Icon
                name="mdi:format-align-right"
                class="w-5 h-5 text-gray-700"
              />
            </button>
          </div>
          <textarea
            class="w-full p-4 text-black border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            placeholder="Write your text here..."
            v-model="textInput"
          ></textarea>
        </div>
      </div>
      <div class="flex flex-col gap-y-4 mt-8">
        <div class="flex items-center gap-x-4">
          <Icon name="material-symbols:android-messages" />
          <p>fahey.designer@robot.co</p>
        </div>
        <hr />
        <div class="flex items-center gap-x-4">
          <Icon name="material-symbols:admin-meds" />
          <Icon name="material-symbols:android-messages" />
          <Icon name="material-symbols:admin-meds" />
          <Icon name="material-symbols:android-messages" />
        </div>
        <hr />
        <div class="flex items-center gap-x-4">
          <Icon name="material-symbols:android-messages" />
          <p>robot.co</p>
        </div>
      </div>
      <div class="container mx-auto mt-8">
        <table class="min-w-full">
          <thead>
            <tr>
              <th class="py-2 text-left">Product</th>
              <th class="py-2 text-left">Price</th>
              <th class="py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="product in productsDummyData"
              :key="product.productName"
              class="hover:bg-gray-700 hover:cursor-pointer"
            >
              <td class="py-2">
                <div class="flex items-center">
                  <img
                    :src="product.productImage"
                    alt="Product Image"
                    class="w-16 h-16 mr-4 rounded"
                  />
                  <div>
                    <p class="font-bold">{{ product.productName }}</p>
                    <p>{{ product.productDescription }}</p>
                  </div>
                </div>
              </td>
              <td class="py-2">
                <button
                  class="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
                >
                  <span>{{ product.productCost | currency }}</span>
                </button>
              </td>
              <td class="py-2">{{ product.productDate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/users";
import { io } from "socket.io-client";
import { productsDummyData } from "../utils/dummyData";

const socket = io("http://localhost:4000");
const userStore = useUserStore();
const router = useRouter();
const lastMessageRef = ref(null);
const textInput = ref("");

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
