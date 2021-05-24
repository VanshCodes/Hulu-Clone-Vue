<template>
  <nav>
    <div
      class="navbar-wrapper flex px-10 sm:px-20 text-2xl overflow-x-none whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
    >
      <div
        class="nav-item"
        :key="index"
        v-for="([, { title }], index) in Object.entries(requests)"
      >
        <h2
          class="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
        >
          {{ title }}
        </h2>
        <!-- {{ url }} -->
      </div>
    </div>
    <div
      class="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
    ></div>
  </nav>
</template>

<script>
import requests from "../utils/requests.js";
export default {
  data() {
    return { requests };
  },
};
</script>

<style>
.scroll-hide {
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
  /* this will hide the scrollbar in internet explorers */
  -ms-overflow-style: none;
}

/* this will hide the scrollbar in webkit based browsers - safari, chrome, etc */

/* Optional: show position indicator in red */
/* .hide-scrollbar ::-webkit-scrollbar-thumb {
  background: #201f1f;
} */
</style>