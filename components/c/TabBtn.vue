<template functional>
  <div class="TabBtn flex items-baseline"
    :class="{active: props.active}"
    v-on="listeners"
  >
    <div class="TabBtn__name">{{props.name}}</div>
    &nbsp;
    <!-- v-if="props.sup" -->
    <sup class="text-bluebg-blue-600">{{props.sup}}</sup>
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
    sup: {
      type: [Number, String],
    },
    name: {
      type: String,
      default: 'TEXT',
    },
  },
}
</script>

<style>
.TabBtn {
  /* sulguni */
  @apply cursor-pointer opacity-72 hover:opacity-100;
}
.TabBtn__name {
  @apply relative pb-2 flex-shrink-0 text-xl;
  white-space: nowrap;
  @apply before:(content-[''] bg-blue-600 rounded-2px h-1 w-0);
}
.TabBtn.active {
  @apply opacity-100;
}
.TabBtn.active .TabBtn__name {
  @apply before:(w-full absolute bottom-0);
}
</style>