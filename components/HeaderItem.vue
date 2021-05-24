<template>
  <div
    class="flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white group"
  >
    <component
      class="h-8 mb-1 group-hover:animate-bounce text-white"
      :is="Icon"
    />
    <p class="opacity-0 group-hover:opacity-100 tracking-widest">
      {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["title", "Icon"],
};
</script>

<style>
</style> 