<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12">
      <div class="col-span-4">
        <LeftPanel />
      </div>

      <div class="col-span-8">
        <div>
          <p>This is Navbar</p>
        </div>
        <div class="grid grid-cols-12">
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
