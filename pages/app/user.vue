<template>
<div>

   <a-table :columns="columns" :data-source="userList">
    <a slot="content" slot-scope="text">{{ text }}</a>
  </a-table>

  <pre 
    style="height:200px"
    class="p-1 bg-gray-50 text-[10px] overflow-auto resize-y">{{userList}}</pre>

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
  computed: {
    columns() {
      return Object.keys(this.userList[0]).map(el => ({
        title: el,
        dataIndex: el,
        key: el,
      }))
    }
  },

  methods: {
  },

}
</script>

<style>

</style>