<template>
  <div class="bg-red-300 w-full flex flex-col items-center" v-on:click="click">
    <span class="pointer-events-none mt-auto">Click me for leads!</span>
    <span class="text-4xl mb-auto">{{ formattedLeads }}</span>
  </div>
</template>

<script>
let formatter = Intl.NumberFormat('en', { notation: 'compact' });

export default {
  props: ['leads'],
  computed: {
    formattedLeads() { return formatter.format(this.leads); }
  }
}
</script>
