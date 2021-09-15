<template>
  <ul class="w-1/3 flex-shrink-0">
    <Factory v-for="factory in factories" :factory="factory" :key="factory.name" :leads="leads" v-on:purchase="purchase"/>
  </ul>
</template>

<script>
import Factory from './Factory.vue';

export default {
  name: 'Factories',
  emits: ['purchase'],
  components: {
    Factory
  },
  methods: {
    purchase(name) {
      this.$emit('purchase', name);
    }
  },
  props: ['factories', 'leads']
}
</script>
