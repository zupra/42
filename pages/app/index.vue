<template>
  <div>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="userInfo">
        <pre>{{ userInfo }}</pre>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [info] = await Promise.all([
      $axios.$get('/user/info'),
    ])
    return {
      userInfo: info,
    }
  },
  data() {
    return {}
  },
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>