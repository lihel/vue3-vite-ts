<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <div>
    <div @click="handlergo('/home')">Home</div>
    <div @click="handlergo('/contact')">Contact</div>
  </div>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouteLocationRaw } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  // name: "App",
  methods: {
    handlergo(path: RouteLocationRaw) {
      this.$router.replace(path);
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
