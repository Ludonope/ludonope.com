<template lang="pug">
  #app
    router-view
    mq-layout(mq="tablet-landscape+")
      MenuBar.menu-bar
</template>

<script lang="ts">
import Vue from 'vue'
import MenuBar from '@/components/MenuBar.vue'

export default Vue.extend({
  components: {
    MenuBar
  }
})
</script>

<style lang="scss" scoped>
.menu-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
}

#app {
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
</style>

<style lang="scss">
@font-face {
  font-family: 'ZwizzBold';
  src:  url('assets/fonts/Zwizz-Bold.eot');
  src:  url('assets/fonts/Zwizz-Bold.eot?#iefix') format("embedded-opentype"),
        url('assets/fonts/Zwizz-Bold.woff') format("woff"),
        url('assets/fonts/Zwizz-Bold.woff2') format("woff2");
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: 'ZwizzRegular';
  src:  url('assets/fonts/Zwizz-Regular.eot');
  src:  url('assets/fonts/Zwizz-Regular.eot?#iefix') format("embedded-opentype"),
        url('assets/fonts/Zwizz-Regular.woff') format("woff"),
        url('assets/fonts/Zwizz-Regular.woff2') format("woff2");
  font-weight: 600;
  font-style: normal;
}

@import url('https://fonts.googleapis.com/css?family=Roboto:Light,Thin&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}

body {
  margin: 0;
  padding: 0;
  background-color: black;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>