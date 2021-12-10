<template>
  <div v-show="isActive">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['name','sup'],
  data() {
    return {
      isActive: this.$attrs.active || false
    };
  },
  methods: {
    setIsActive (state) {
      this.isActive = state
    }
  }
}
</script>

<style>
</style>