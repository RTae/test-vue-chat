<template>
  <div
    class="flex justify-between header-wrapper p-4 bg-red-500 border-b border-grey-light"
  >
    <h1 v-if="$route.name === 'Home'">Chart List</h1>
    <div v-if="$route.name === 'Home'">
      <button class="mr-5" @click="onClickLogout">Logout</button>
      <button @click="onClickNewRoom">Create Room</button>
    </div>
    <div class="flex flex-row" v-if="$route.name !== 'Home'">
      <button class="mr-5" @click="onClickBack">Back</button>
      <h1>Room {{ name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    name: String,
  },
  methods: {
    onClickNewRoom() {
      this.$emit("on-click-new-room");
    },
    onClickLogout() {
      this.$emit("on-click-logout");
    },
    onClickBack() {
      this.$emit("on-click-back");
    },
  },
};
</script>
