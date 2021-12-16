<template>
  <div>
    <a-table :columns="columns" :data-source="userList">
       <a slot="action" href="#">Edit</a>
    </a-table>

    <pre
      style="height: 200px"
      class="p-1 bg-gray-50 text-[10px] overflow-auto resize-y"
      >{{ userList }}</pre
    >
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [user] = await Promise.all([$axios.$get('/admin/user')])
    return {
      userList: user.data,
    }
  },
  data() {
    return {}
  },
  computed: {
    _columns() {
      return Object.keys(this.userList[0]).map((el, idx) => ({
        ...(!idx
          ? {
              title: el,
              dataIndex: el,
              key: el,
              sorter: true,
              fixed: 'left',
            }
          : {
              title: el,
              dataIndex: el,
              key: el,
              sorter: true,
            }),
      }))
    },
    columns() {
      return [
        ...this._columns,
        {
          title: 'Action',
          key: 'operation',
          fixed: 'right',
          width: 100,
          scopedSlots: { customRender: 'action' },
        },
      ]
    },
  },

  methods: {},
}
</script>

<style>
</style>