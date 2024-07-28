<template>
  <div class="bg-gray-700 p-6 rounded-lg">
    <div>
      <Icon name="uil:github" style="color: white; font-size: 48px" />
    </div>
    <div class="mt-12">
      <div
        v-for="item in leftPanelDummydata"
        :key="item.iconName"
        class="flex items-center space-x-2 my-2"
      >
        <Icon :name="item.iconName" style="color: white; font-size: 24px" />
        <span class="text-lg font-medium">{{ item.name }}</span>
      </div>
    </div>
    <div class="flex flex-col mt-32 gap-y-4">
      <hr />
      <div class="flex justify-between">
        <div class="flex items-center">
          <Icon name="material-symbols:question-mark" />
          <p>Help & getting started</p>
        </div>
        <Icon name="material-symbols:shield-person-rounded" />
      </div>
      <div class="bg-black rounded-full">
        <div class="flex">
          <button
            class="flex items-center justify-center basis-3/6 gap-x-2 p-3"
          >
            <Icon name="material-symbols:sunny" style="color: white" />
            <span class="text-white">Light</span>
          </button>
          <button
            class="flex items-center justify-center basis-3/6 gap-x-2 p-3"
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
import { leftPanelDummydata } from "../utils/dummyData";
</script>
