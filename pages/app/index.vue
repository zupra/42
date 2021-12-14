<template>
  <div class="m-auto container">

    <pre>content:{{ list }}</pre>

    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="userInfo">
        <pre v-if="userInfo">{{ userInfo }}</pre>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [info, contentList] = await Promise.all([
      $axios.$get('/user/info'),
      $axios.$get('/content'),
    ])
    return {
      userInfo: info,
      list: contentList.data,
    }
  },
  data() {
    return {
      
      info: "My Default Content",
      //
      userInfo: null,
      //
      loginData: {
        name: '',
        email: '',
        password: '',
      },
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },
  },
}
</script>