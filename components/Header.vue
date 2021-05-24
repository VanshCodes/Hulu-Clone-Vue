<template>
  <header class="flex flex-col sm:flex-row m-5 justify-between items-center">
    <!-- <h1>This is the Header</h1> -->
    <div id="header-items" class="flex flex-grow justify-evenly max-w-2xl">
      <HeaderItem
        :key="index"
        v-for="(title, index) in Object.keys(NavItemsVar)"
        :Icon="NavItemsVar[title]"
        :title="title"
      />
    </div>
    <nuxt-img
      class="object-contain"
      width="200"
      height="100"
      src="https://links.papareact.com/ua6"
      alt=""
    />
  </header>
</template>

<script>
import HeaderItem from "../components/HeaderItem.vue";
import { NavItemsVar } from "../variables/header.vars.js";
export default {
  components: { HeaderItem },
  data() {
    return { NavItemsVar };
  },
};
</script>

<style>
</style>