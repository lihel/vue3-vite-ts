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
      interface Person {
      readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
  }

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
console.log(tom)
      return `hello, ${name}`;
    }
  }
});
</script>
