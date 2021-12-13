<template>
  <div>
    <div class="flex gap-5 mb-6">
      <CTabBtn
        v-for="(tab, idx) in tabs"
        :key="idx"
        :active="tab.isActive"
        :name="tab.name"
        @click="setActive(idx)"
      >
        {{ tab.label }}
      </CTabBtn>
    </div>
    <slot />
  </div>
</template>


<script>
export default {
  props: {
    idx: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tabs: [],
      activeTab: this.idx,
    }
  },
  created() {
    this.tabs = this.$children
    this.$nextTick(function () {
      this.tabs[this.activeTab].setIsActive(true)
    })
  },
  methods: {
    setActive(idx) {
      this.activeTab = idx
    },
  },
  watch: {
    idx(val) {
      this.activeTab = val
    },
    activeTab(idx, oldIdx) {
      this.tabs[idx].setIsActive(true)
      this.tabs[oldIdx].setIsActive(false)
    },
  },
}
</script>

<style>
</style>