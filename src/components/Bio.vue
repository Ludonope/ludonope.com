<template lang="pug">
  .bio-section
    div(v-observe-visibility="visibilityChanged")
    transition(name="fade")
      .text(v-show="!delay") {{ $t('intro.bio') }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'Bio'
})
export default class Bio extends Vue {
  delay: number

  constructor () {
    super()
    this.delay = 200
  }

  visibilityChanged (isVisible: boolean, entry: any) {
    this.delay = 200

    if (isVisible) {
      setTimeout(() => {
        this.delay = 0
      }, this.delay)
    }
  }
}
</script>

<style lang="scss" scoped>
.bio-section {
  color: white;
  width: 100%;
  min-height: 110vh;
  display: grid;
  justify-content: center;
  align-content: center;
}

.text {
  max-width: 850px;
  text-align: center;
  font-size: 23px;
  line-height: 1.3em;
}
</style>