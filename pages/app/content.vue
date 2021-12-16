<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Редактировать">
        <a-card class="!mb-6" title="Редактировать контент">
          <TContent :data="contentList" />
          <pre
            style="height: 300px"
            class="p-1 bg-gray-50 text-[10px] overflow-auto resize-y"
            >{{ contentList }}</pre
          >
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Добавить">
        <a-card class="!mb-6" title="Добавить контент">
          <a-tabs default-active-key="1" @change="callback">
            <!-- 
            <a-tab-pane key="1" tab="Новость"></a-tab-pane>
            <a-tab-pane key="2" tab="Статья"></a-tab-pane> 
            -->
            <a-tab-pane
              v-for="(V,K) in content_types"
             :key="K" :tab="V" />
          </a-tabs>

          <a-input v-model="contentData.title" placeholder="title" />
          <a-input
            class="!mt-4"
            v-model="contentData.anons"
            placeholder="anons"
          />
          <a-textarea
            class="!my-4"
            v-model="contentData.content"
            placeholder="content"
          />
          <a-button type="primary" @click="setContent">POST</a-button>
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [content, types] = await Promise.all([
      $axios.$get('/admin/content'),
      $axios.$get('/dictionary/content-types'),
    ])
    return {
      contentList: content.data,
      content_types: types,
    }
  },
  data() {
    return {
      // type_id 1-news 2-articles
      contentType: 1,
      contentData: {
        title: 'Title',
        anons: 'Anons',
        content: 'Some content',
      },
    }
  },

  methods: {
    callback(key) {
      console.log(key)
      this.contentType = key
    },
    async setContent() {
      await this.$axios.$post('/admin/content', {
        type_id: this.contentType,
        ...this.contentData,
      })
      this.reGet()
    },
    async reGet() {
      const { data } = await this.$axios.$get('/admin/content')
      this.contentList = data
    },
  },
}
</script>

<style>
</style>