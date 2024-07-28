<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12 mt-8 gap-x-8">
      <div class="col-span-4">
        <LeftPanel />
      </div>

      <div class="col-span-8 flex flex-col gap-y-8">
        <div>
          <div
            class="rounded-lg p-6 flex justify-between"
            :class="{
              'bg-slate-300': false,
              'bg-gray-800': true,
            }"
          >
            <div class="flex items-center bg-gray-100 rounded-md p-2 shadow-md">
              <!-- Search Icon -->
              <div class="p-2">
                <Icon name="material-symbols:search" class="text-gray-500" />
              </div>

              <!-- Input Box -->
              <input
                type="text"
                placeholder="Search"
                class="flex-grow p-2 bg-transparent outline-none"
              />

              <!-- Command+F Button -->
              <button
                class="flex items-center justify-center bg-gray-200 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-300 transition"
              >
                Press <kbd class="ml-1 px-1 bg-gray-300 rounded">Command</kbd> +
                <kbd class="ml-1 px-1 bg-gray-300 rounded">F</kbd>
              </button>
            </div>
            <div class="flex items-center gap-x-8">
              <button
                class="flex items-center px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              >
                <span class="text-lg font-bold mr-2">+</span>
                <span>Create</span>
              </button>
              <div>
                <Icon
                  name="material-symbols:android-messages"
                  :style="{
                    color: mode === 'light' ? 'black' : 'white',
                    fontSize: '32px',
                  }"
                />
              </div>
              <div>
                <Icon
                  name="material-symbols:circle-notifications"
                  :style="{
                    color: mode === 'light' ? 'black' : 'white',
                    fontSize: '32px',
                  }"
                />
              </div>
              <div class="flex -space-x-1 overflow-hidden">
                <img
                  class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-12 gap-x-8">
          <div class="col-span-4">
            <ChatBar />
          </div>
          <div class="col-span-8">
            <ChatBody />
            <ChatFooter />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LeftPanel from "~/components/LeftPanel.vue";
import ChatBar from "~/components/ChatBar.vue";
import ChatBody from "~/components/ChatBody.vue";
import ChatFooter from "~/components/ChatFooter.vue";
</script>
