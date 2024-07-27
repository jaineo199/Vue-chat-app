<template>
  <div class="chat">
    <ChatBar />
    <div class="chat__main">
      <ChatBody />
      <ChatFooter />
    </div>
  </div>
</template>

<script setup>
import ChatBar from "~/components/ChatBar.vue";
import ChatBody from "~/components/ChatBody.vue";
import ChatFooter from "~/components/ChatFooter.vue";
</script>
