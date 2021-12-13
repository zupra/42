<template>
  <div>
    <div class="fixed w-full top-0 shadow-md flex justify-end items-center pr-2">

      <N-link
        v-for="(V, K, idx) in { Link_1: '/', Link_2: '/', Link_3: '/' }"
        :key="idx"
        :to="V"
        class="bg-gray-100 py-1 px-3 m-2"
      >
        {{K}}
      </N-link>

      <a-button class="mx-4" @click="logout">logout</a-button>
      
      

    </div>
    <Nuxt class="mt-20"/>
  </div>
</template>

<script>
export default {
  middleware: ['login'],
  methods: {
    async logout() {
      await this.$axios.$post('user/logout');
      this.$storage.removeUniversal('api_token');
      this.$storage.removeUniversal('whoami');
      this.$router.push('/')
    },
  }
}
</script>