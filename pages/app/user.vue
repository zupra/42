<template>
<div>

  <pre 
    style="height:68vh"
    class="p-1 bg-gray-50 text-xs overflow-auto resize-y">{{userList}}</pre>

  <a-card class="!mb-6" title="Добавить Пользователя">
  </a-card>


</div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [user] = await Promise.all([
      $axios.$get('/admin/user'),
    ])
    return {
      userList: user.data,
    }
  },
  data() {
    return {}
  },

  methods: {
  },

}
</script>

<style>

</style>