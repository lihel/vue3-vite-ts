<template>
  <div>Home</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {},
  created() {
    // console.log(this.$store.state.name);
    console.log(this.handleFun("ahhh"));
  },
  methods: {
    handleFun(name: String) {
      return `hello, ${name}`;
    }
  }
});
</script>
