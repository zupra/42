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
  async asyncData({ $axios, $storage }) {
    const [user] = await Promise.all([
      $axios.$get('/user/info'),
    ])
    user.roles.includes('admin') && $storage.setUniversal('is_admin', true)
    return {
      userInfo: user,
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