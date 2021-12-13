<template functional>
    <!-- :class="props.active && 'active'" -->
    <!-- :class="{active: active}" -->
  <div class="TagBtn"
    :class="{active: props.active}"
    v-on="listeners"
  >
    <slot>TEXT</slot>
  </div>
</template>

<script>
// https://stackoverflow.com/questions/50288996/how-to-emit-an-event-from-vue-js-functional-component
export default {
  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style>
.TagBtn {
  @apply cursor-pointer font-medium text-13px bg-alien text-white rounded-full;
  /* mozzarella py-1 */
  @apply flex-shrink-0 inline-flex items-center gap-x-1 pl-2 pr-3 h-6;
  @apply before:(content-[''] flex-shrink-0 bg-white opacity-16 rounded-full w-2 h-2);
}
.TagBtn.active {
  @apply bg-rocky;
  @apply before:opacity-100;
}
</style>