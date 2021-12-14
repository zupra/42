<template>
  <div class="m-auto container">
    <a-card class="mb-6">
      <a-input v-model="newsData.title" placeholder="title"/>
      <br /><br />
      <a-input class="!mt-4" v-model="newsData.anons" placeholder="anons"/>
      <br /><br />
      <a-textarea class="!my-4" v-model="newsData.content" placeholder="content"/>
      <br /><br />
      <a-button @click="setNews">setNews</a-button>
    </a-card>

    <br /><br />
    <a-button @click="getNews">getNews</a-button>

    <pre>newsList:{{ newsList }}</pre>

    <client-only>
      <Tiptap />
    </client-only>

    <pre>content:{{ list }}</pre>

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
    const [info, content] = await Promise.all([
      $axios.$get('/user/info'),
      $axios.$get('/content'),
    ])
    return {
      userInfo: info,
      content: content.data,
    }
  },
  data() {
    return {
      userInfo: null,

      newsList: [],
      newsData: {
        title: 'Title',
        anons: 'Anons',
        content: 'Some content',
      },
    }
  },
  methods: {
    callback(key) {
      console.log(key)
    },

    // type_id 1-news 2-articles
    async setNews() {
      await this.$axios.$post('/admin/content', {
        type_id: 1,
        ...this.newsData,
      })
    },
    async getNews() {
      const { data } = await this.$axios.$get('/admin/content')
      this.newsList = data
    },
  },
}
</script>