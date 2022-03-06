<template>
  <div class="shadow-lg w-full p-5" :class="{ [`flex justify-end`]: usernameId === username }">
    <div class="flex flex-col ">
      <h3>{{ username }}</h3>
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>

import { auth } from "../utils";

export default {
  name: "MessageBlock",
  props: ["username", "message"],
  data() {
    return {
      usernameId: auth.getUsername()
    };
  },
};
</script>
