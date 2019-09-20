<template lang="pug">
  .background
    .title LUDOVIC PETRENKO
    h2 Full Stack Software Engineer
    .links
      RoundButton(to="github.com/Ludonope") Github
      RoundButton(to="gitlab.com/Ludonope") Gitlab
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RoundButton from '@/components/RoundButton.vue'

@Component({
  name: 'Introduction',
  components: {
    RoundButton
  }
})
export default class extends Vue {
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 900px;
  background: black;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
}

.title {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 90px;
  margin: 20px 0;
}

h2 {
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 200;
  text-align: center;
}

.links {
  display: grid;
  grid-template-columns: auto auto;
  align-content: center;
  justify-content: center;
  grid-column-gap: 50px;
}
</style>