<template>
  <div>
    <a-tabs default-active-key="1">
      <a-tab-pane key="1" tab="Редактировать">
        <a-card class="!mb-6" title="Редактировать">
          <pre
            style="height: 300px"
            class="p-1 bg-gray-50 text-xs overflow-auto resize-y"
            >{{ tariffList }}</pre
          >
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Добавить">
        <a-card class="!mb-6" title="Добавить тариф">
          <a-input class="" v-model="tariffData.name" placeholder="name" />
          <a-input
            class="!mt-4"
            v-model="tariffData.description"
            placeholder="description"
          />
        </a-card>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const [tariff] = await Promise.all([$axios.$get('/admin/tariff')])
    return {
      tariffList: tariff.data,
    }
  },
  data() {
    return {
      tariffData: {
        name: 'Standart',
        description: 'Best plan',
        connections: 4000,
        proxies: 40000,
        email_available: false,
        // prices: [
        //   {
        //     name: '30 days',
        //     days_limit: 30,
        //     traffic_limit: 100,
        //     amount: '120.00',
        //     discount_percent: 15,
        //   },
        // ],
      },
    }
  },

  methods: {},
}
</script>

<style>
</style>