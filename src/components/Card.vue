<template>
  <div class="flex flex-row shadow-lg w-full p-5">
    <h2 class="mr-5" @click="onClickName">{{ value }}</h2>
    <button class="ho" @click="onClickDelete">x</button>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ["value"],
  methods: {
    onClickName() {
      this.$emit("on-click-text");
    },
    onClickDelete() {
      this.$emit("on-click-delete");
    },
  },
};
</script>
