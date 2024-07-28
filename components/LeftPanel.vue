<template>
  <div>
    <Icon name="uil:github" style="color: black; font-size: 48px" />
    <div
      v-for="item in leftPanelDummydata"
      :key="item.iconName"
      class="flex items-center space-x-2 my-2"
    >
      <Icon :name="item.iconName" style="color: black; font-size: 24px" />
      <span class="text-lg font-medium">{{ item.name }}</span>
    </div>
  </div>
</template>

<script setup>
import { leftPanelDummydata } from "../utils/dummyData";
</script>
