<template>
  <div class="body-wrapper">
    <Nuxt />
    <Header :title="null" />
    <Nav />
  </div>
</template>

<style>
</style>
<script>
import "./index.css";
import Header from "../components/Header.vue";
import Nav from "../components/Nav.vue";

export default {
  components: { Header, Nav },
};
</script>