<template>
  <div>
    <header
      class="
        fixed
        z-10
        bg-white
        w-full
        top-0
        shadow-md
        flex
        justify-end
        items-center
        pr-2
      "
    >
      <N-link
        v-for="(V, K, idx) in { Link_1: '/', Link_2: '/', Link_3: '/' }"
        :key="idx"
        :to="V"
        class="bg-gray-100 py-1 px-3 m-2"
      >
        {{ K }}
      </N-link>

      <a-button class="mx-4" @click="logout">logout</a-button>
    </header>
    <div class="mx-auto mt-20 container grid grid-cols-[200px,1fr]">
      <aside class="flex flex-col">
        <N-link
          v-for="(V, K, idx) in { 'Main': '/app', 'Content': '/app/content', 'Tariff': '/app/tariff', 'User': '/app/user' }"
          :key="idx"
          :to="V"
          class="bg-gray-100 py-1 px-3 m-2"
        >
          {{ K }}
        </N-link>
      </aside>

      <Nuxt class="m-4" />
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['login'],

  data() {
    return {
      collapsed: false,
    }
  },

  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    },
    async logout() {
      await this.$axios.$post('user/logout')
      this.$storage.removeUniversal('api_token')
      this.$storage.removeUniversal('whoami')
      this.$router.push('/')
    },
  },
}
</script>
<style>
.nuxt-link-exact-active {
  @apply bg-gray-300;
}
</style>