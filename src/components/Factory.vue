<template>
  <li class="p-4 border-b relative factory" v-on:click="purchase" v-if="factory.visible">
    <div class="flex">
      <div v-if="factory.count">{{ formattedCount }} &times; {{ factory.name }}</div>
      <div v-else class="text-gray-300">{{ formattedCount }} &times; {{ factory.name }}</div>
      <div v-if="purchasable" class="ml-auto">Buy: {{ formattedCost }}</div>
      <div v-else class="text-gray-300 ml-auto">Buy: {{ formattedCost }}</div>
    </div>
    <div class="flex">
      <div class="text-xs text-gray-400">{{ factory.description }}</div>
      <div class="text-xs text-gray-600 ml-auto">+ {{formattedLeads}}</div>
    </div>
    <div class="absolute bottom-0 left-0 h-1 bg-blue-400" :style="{ width: progressWidth }"></div>
  </li>
</template>

<script>
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

export default {
  props: ['factory', 'leads'],
  emits: ['purchase'],
  methods: {
    purchase() {
      if(this.purchasable) {
        this.$emit('purchase', this.factory.name);
      }
    }
  },
  computed: {
    purchasable() { return this.factory.cost <= this.leads },
    formattedLeads() { return formatter.format(this.factory.leads * this.factory.count) },
    formattedCost() { return formatter.format(this.factory.cost) },
    formattedCount() { return formatter.format(this.factory.count) },
    progressWidth() { return this.factory.progress / this.factory.speed * 100 + '%' }
  }
}
</script>
