<template lang="pug">
  #app
    router-view
    MenuBar.menu-bar
</template>

<script lang="ts">
import Vue from 'vue';
import MenuBar from '@/components/MenuBar.vue';

export default Vue.extend({
  components: {
    MenuBar,
  },
});
</script>

<style lang="scss" scoped>
.menu-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
}
</style>

<style lang="scss">
#app {
  font-family: 'Roboto';
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
}
</style>