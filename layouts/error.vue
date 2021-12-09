<template>
  <div class="h-screen flex">
    <div class="m-auto container">
      <pre class="overflow-x-auto p-2 rounded-md bg-gray-200">{{ error }}</pre>

      <center class="">
        <N-link  
          v-if="!$route.path === '/'"
          to="/"
        >
          <a-button type="primary">На главную</a-button>
        </N-link>
        <a-button class="ml-3" type="primary" @click="reload"
          >Обновить</a-button
        >
      </center>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  asyncData() {
    throw new Error(':(')
  },
  mounted() {
    console.error('ERROR:', this.error.statusCode, this.error.message)
    console.table(this.error)
  },
  methods: {
    reload() {
      location.reload()
    },
  },
}
</script>