<template lang="pug">
  .contacts-section(:class="$mq")
    div(v-observe-visibility="visibilityChanged")
    transition(name="fade" v-for="(text, i) of texts" :key="i")
      .text(v-show="!delays[i]") {{ text }}
    .copyright Copyright 2019 Ludovic Petrenko
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Contacts'
})
export default class Bio extends Vue {
  delays: number[]
  texts: string[]

  constructor () {
    super()
    this.texts = [
      'Ludovic Petrenko',
      'ludovic.petrenko@epitech.eu',
      '(+33) 7 87 07 93 80'
    ]
    this.delays = [200, 200, 200, 300]
  }

  visibilityChanged (isVisible: boolean, entry: any) {
    if (isVisible) {
      let sum = 800
      for (let i in this.delays) {
        sum += this.delays[i]
        setTimeout(() => {
          // this.delays[i] = 0
          Vue.set(this.delays, i, 0)
        }, sum)
      }
    } else if (entry.boundingClientRect.top >= 0) {
      Vue.set(this, 'delays', [200, 300, 300, 300])
    }
  }
}
</script>

<style lang="scss" scoped>
.contacts-section {
  color: white;
  width: 100%;
  min-height: 110vh;
  display: grid;
  grid-template-rows: 0px 60px 60px 60px;
  justify-content: center;
  align-content: center;
  padding-top: 50px;
  position: relative;

  &.phone, &.tablet-portrait {
    padding-bottom: 100px;
  }
}

.text {
  max-width: 850px;
  text-align: center;
  font-size: 21px;
  line-height: 1.3em;
}

.copyright {
  text-align: center;
  font-size: 15px;
  color: #555;
  position: absolute;
  bottom: 5px;
  width: 100%;
}
</style>