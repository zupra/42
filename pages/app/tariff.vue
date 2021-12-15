<template>
<div>

  <pre 
    style="height:300px"
    class="p-1 bg-gray-50 text-xs overflow-auto resize-y">{{tariffList}}</pre>

  <a-card class="!mb-6" title="Добавить тариф">
  </a-card>


</div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [tariff] = await Promise.all([
      $axios.$get('/admin/tariff'),
    ])
    return {
      tariffList: tariff.data,
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