<template>
  <div
    class="App min-w-screen min-h-screen flex flex-col bg-grey-lightest font-sans"
  >
    <div class="content-wrapper pt-8 flex-1 bg-grey-lighter">
      <Modal lable="Login" @on-click="onClickLogin" v-model="username" />
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  name: "LoginView",
  components: {
    Modal,
  },
  data() {
    return {
      username: "",
    };
  },
  methods: {
    onClickLogin: function () {
      localStorage.setItem("token", this.username);
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
