<template>
  <div
    :class="{
      'bg-slate-300	 text-black p-6 rounded-lg': mode === 'light',
      'bg-gray-800 text-white p-6 rounded-lg': mode === 'dark',
    }"
  >
    <div>
      <Icon
        name="uil:github"
        :style="{
          color: mode === 'light' ? 'black' : 'white',
          fontSize: '48px',
        }"
      />
    </div>
    <div class="mt-12">
      <div
        v-for="item in leftPanelDummydata"
        :key="item.iconName"
        class="flex items-center space-x-2 my-2"
      >
        <Icon
          :name="item.iconName"
          :style="{
            color: mode === 'light' ? 'black' : 'white',
            fontSize: '24px',
          }"
        />
        <span class="text-lg font-medium">{{ item.name }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-32 gap-y-4">
      <hr />
      <div class="flex justify-between">
        <div class="flex items-center">
          <Icon
            name="material-symbols:question-mark"
            :style="{ color: mode === 'light' ? 'black' : 'white' }"
          />
          <p>Help & getting started</p>
        </div>
        <Icon
          name="material-symbols:shield-person-rounded"
          :style="{ color: mode === 'light' ? 'black' : 'white' }"
        />
      </div>
      <div class="bg-black rounded-full">
        <div class="flex">
          <button
            :class="{
              'flex items-center m-2 justify-center rounded-full bg-gray-600 basis-3/6 gap-x-2 p-3':
                mode === 'light',
              'flex items-center justify-center basis-3/6 gap-x-2 p-3':
                mode === 'dark',
            }"
            @click="setMode('light')"
          >
            <Icon name="material-symbols:sunny" style="color: white" />
            <span class="text-white">Light</span>
          </button>
          <button
            :class="{
              'flex items-center m-2 justify-center rounded-full bg-gray-600 basis-3/6 gap-x-2 p-3':
                mode === 'dark',
              'flex items-center justify-center basis-3/6 gap-x-2 p-3':
                mode === 'light',
            }"
            @click="setMode('dark')"
          >
            <Icon name="material-symbols:mode-night" style="color: white" />
            <span class="text-white">Dark</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { leftPanelDummydata } from "../utils/dummyData";
import { useUserStore } from "../stores/users";

const mode = ref("");
const userStore = useUserStore();

const setMode = (newMode) => {
  mode.value = newMode;
  localStorage.setItem("userSelectedPreferedMode", newMode);
  userStore.setuserSelectedPreferedMode(newMode);
};

onMounted(() => {
  mode.value = localStorage.getItem("userSelectedPreferedMode") || "dark";
  userStore.setuserSelectedPreferedMode(mode.value);
});
</script>
