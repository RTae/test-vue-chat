<template>
  <div
    class="min-w-screen min-h-screen flex flex-col bg-grey-lightest font-sans"
  >
    <Header @on-click-back="onClickBack" :name="$route.query.name" />
    <div class="min-h-screen">
      <div class="w-full">
        <MessageBlock  
          v-for="message in messageShow" :key="message.id"
          :username="message.username" 
          :message="message.message"/>
      </div>
      <div class="row-col-1">
        <input v-model="message" type="text" />
        <button @click="onClickSend">Enter</button>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import MessageBlock from "../components/MessageBlock.vue";
import { auth } from "../utils";

export default {
  name: "ChatRoomView",
  components: {
    Header,
    MessageBlock
  },
  data() {
    return {
      chatMessageList: [],
      message: "",
      username: auth.getUsername()
    };
  },
  mounted() {
    this.chatMessageList = JSON.parse(localStorage.getItem("chat-message-list")) || [];
  },
  methods: {
    onClickSend() {
      this.chatMessageList.push({
        id: this.chatMessageList.length + 1,
        roomId: this.$route.query.id,
        username: this.username,
        message: this.message
      })
      this.message = ""
      localStorage.setItem("chat-message-list", JSON.stringify(this.chatMessageList));
    },
    onClickBack() {
      this.$router.push({ name: "Home" });
    },
  },
  computed: {
    messageShow() {
      return this.chatMessageList.filter((message) => message.roomId === this.$route.query.id)
    }
  }
};
</script>
