<template name="HomeView">
  <div
    class="min-w-screen min-h-screen flex flex-col bg-grey-lightest font-sans"
  >
    <Header
      @on-click-logout="onClickLogout"
      @on-click-new-room="onClickShowModal"
    />
    <div class="content-wrapper pt-8 flex-1 bg-grey-lighter">
      <Modal v-if="showModal" @on-click="onClickAddRoom" v-model="roomName" />
      <div class="content py-4 container max-w-md mx-auto">
        <div v-for="room in roomList" :key="room.id">
          <Card
            @on-click-text="onClickRoom(room.id)"
            @on-click-delete="onClickDeleteRoom(room.id)"
            :value="room.name"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";
import Modal from "../components/Modal.vue";

export default {
  name: 'HomeView',
  components: {
    Header,
    Card,
    Modal,
  },
  data() {
    return {
      roomName: "",
      roomList: [],
      chatMessageList: [],
      showModal: false,
    };
  },
  mounted() {
    this.roomList = JSON.parse(localStorage.getItem("data-room-list")) || [];
  },
  methods: {
    onClickAddRoom() {
      this.roomList.push({
        id: this.roomList.length + 1,
        name: this.roomName,
      });
      this.showModal = !this.showModal;
      localStorage.setItem("data-room-list", JSON.stringify(this.roomList));
    },
    onClickDeleteRoom (index) {
      this.roomList = this.roomList.filter((room) => room.id !== index);
      let messageList = JSON.parse(localStorage.getItem("chat-message-list")) || [];

      if(messageList.length > 0) {
        messageList = messageList.filter((message) => message.roomId !== index)
        localStorage.setItem("chat-message-list", JSON.stringify(messageList));
      }
      localStorage.setItem("data-room-list", JSON.stringify(this.roomList));
    },
    onClickShowModal: function () {
      this.showModal = !this.showModal;
    },
    onClickRoom (id) {
      let room = this.roomList.filter((roomData) => roomData.id === id)[0];
      console.log(room)
      this.$router.push({
        name: "ChatRoom",
        query: { id: room.id, name: room.name  }
      });
    },
    onClickLogout () {
      localStorage.removeItem("token");
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
