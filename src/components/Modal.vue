<template>
  <div class="shadow-lg w-full h-20">
    <label>{{ lable }}</label>
    <div class="flex flex-row">
      <input @change="onChange" v-model="value" type="text" />
      <button @click="onClick">Enter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  model: {
    prop: "value",
    event: "input",
  },
  props: {
    lable: String,
  },
  data() {
    return {
      value: this.value,
    };
  },
  methods: {
    onClick() {
      this.$emit("on-click");
      this.value = "";
    },
    onChange() {
      this.$emit("input", this.value);
    },
  },
};
</script>
