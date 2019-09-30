<template lang="pug">
  .education-container
    .title(:class="delays[0] === 0 ? 'visible': ''") {{ $t('menu.education') }}
    .education(v-observe-visibility="visibilityChanged")
      template(v-for="(item, i) of items")
        .item(:class="(delays[i] === 0 ? 'visible ' : '') + $mq" :key="i")
          .school {{ item.school }}
          .diploma {{ item.diploma }}
          .date {{ item.date }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LocaleMessage } from 'vue-i18n'

export interface Item {
  school: string
  diploma: string|LocaleMessage
  date: string|LocaleMessage
}

@Component({
  name: 'Education'
})
export default class Education extends Vue {
  $mq: any
  delays: number[]

  constructor () {
    super()
    this.delays = []
  }

  get items () {
    return [
      {
        school: 'Epitech (France)',
        diploma: this.$t('educations.epitech.diploma'),
        date: this.$t('educations.epitech.date')
      },
      {
        school: 'California State University Long Beach (USA)',
        diploma: this.$t('educations.csulb.diploma'),
        date: this.$t('educations.csulb.date')
      }
    ]
  }

  mounted () {
    Vue.set(this, 'delays', new Array(this.items.length).fill(300))
  }

  resetDelays () {
    for (const i in this.delays) {
      Vue.set(this.delays, i, 300)
    }
  }

  revealItems () {
    const items = this.items ? this.items.length : 0
    let sum = 0
    let j = 0
    for (const i in this.items) {
      sum += this.delays[i]
      setTimeout(() => {
        Vue.set(this.delays, i, 0)
      }, sum)
    }
  }

  visibilityChanged (isVisible: boolean, entry: any) {
    if (isVisible) {
      this.revealItems()
    } else if (entry.boundingClientRect.top >= 0) {
      this.resetDelays()
    }
  }
}
</script>

<style lang="scss" scoped>
.education-container {
  max-width: 100%;
  display: grid;
  align-content: start;
  grid-template-rows: 100px 1fr;
  color: white;
  height: 100%;
}

.title {
  text-align: center;
  font-size: 20px;
  align-self: center;

  opacity: 0;
  transition: opacity .5s ease-in-out;

  &.visible {
    opacity: 1;
  }
}

.education {
  display: grid;
  justify-content: center;
  align-content: center;

  &.phone, *.tablet-portrait {
    grid-template-columns: 0px 2px 1fr;
  }

  &.tablet-landscape, *.desktop, &.large-desktop {
    grid-template-columns: 1fr 2px 1fr;
  }

  grid-auto-rows: auto;
  grid-column-gap: 30px;
  grid-row-gap: 30px;
}

.diploma {
  margin-left: auto;
}

.item {
  opacity: 0;
  transition: opacity .5s ease-in-out;

  &.visible {
    opacity: 1;
  }

  .date {
    font-size: 12px;
  }

  .school {
    font-size: 18px;
    font-weight: bold;
  }

  .diploma {
    margin: 3px 0;
    max-width: 500px;
  }

  &.phone {
    .date {
      font-size: 10px;
    }

    .school {
      font-size: 15px;
    }
  }
}
</style>