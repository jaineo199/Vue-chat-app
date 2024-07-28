<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-12">
      <div class="col-span-4">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
          minima vero doloremque optio ab nihil! Consectetur non at soluta
          repudiandae quibusdam error unde quasi tempora! Amet numquam quod
          molestiae praesentium aliquam quas, at corrupti iure illum voluptatem
          facere? Laborum animi numquam beatae voluptatum, dolor voluptates
          facilis repudiandae, facere nemo autem natus dolorum vero sed
          voluptatem repellat obcaecati eum distinctio tempore deserunt. Atque
          repudiandae consectetur omnis beatae architecto corrupti nesciunt sed
          voluptatem recusandae aut accusantium fugiat natus vero ut illo, eos
          consequuntur ab repellat? Facere, blanditiis earum ipsam, quasi iste
          obcaecati aliquam, culpa a non aliquid molestias ea excepturi cum
          commodi distinctio libero nostrum in sint saepe sed! Mollitia ducimus
          impedit non. Veniam atque minus nihil soluta dignissimos placeat
          reprehenderit qui.
        </p>
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
import ChatBar from "~/components/ChatBar.vue";
import ChatBody from "~/components/ChatBody.vue";
import ChatFooter from "~/components/ChatFooter.vue";
</script>
