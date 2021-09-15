<template>
  <div class="min-h-screen flex flex-col select-none">
    <Header :leads="game.leads"/>
    <div class="flex-grow flex">
      <Factories :factories="game.factories" :leads="game.leads" v-on:purchase="purchase" />
      <Clicker v-on:click="click" :leads="game.leads" />
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Clicker from './components/Clicker.vue'
import GameClass from './GameClass';
import Factories from './components/Factories.vue';

export default {
  name: 'App',
  components: {
    Header,
    Clicker,
    Factories
  },
  data() {
    return {
      game: new GameClass
    };
  },
  methods: {
    purchase(name) {
      this.game.buyFactory(name);
    },
    click() {
      this.game.leads += 1;
    },
    tick() {
      this.game.tick();
      requestAnimationFrame(this.tick.bind(this));
    }
  },
  created() {
    requestAnimationFrame(this.tick.bind(this));
  }
}

</script>
