<template>
  <a-table :columns="columns" :data-source="data">
    <!-- <a slot="content" slot-scope="text">{{ text }}</a> -->
    <a slot="action" href="#">Edit</a>
  </a-table>
</template>


<script>
/*
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: 60,
  },
  {
    title: 'type',
    dataIndex: 'type_id',
    width: 68,
    scopedSlots: { customRender: 'type_id' },
  },
  {
    title: 'title',
    dataIndex: 'title',
    scopedSlots: { customRender: 'title' },
  },
  {
    title: 'anons',
    dataIndex: 'anons',
    width: '40%',
    scopedSlots: { customRender: 'anons' },
  },
  {
    title: 'content',
    dataIndex: 'content',
    ellipsis: true,
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  },
];
*/

export default {
  // props: ['data'],
  data() {
    return {
      data: this.$attrs.data,
      // columns,
    }
  },
  computed: {
    _columns() {
      return Object.keys(this.$attrs.data[0]).map((el, idx) => ({
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