<template lang="pug">
  .timeline-container
    .timeline(v-observe-visibility="visibilityChanged")
      .line(:style="lineStyle")
      template(v-for="(item, i) of items")
        .left(v-if="i%2 === 0")
        .item(:class="itemClasses(i)" :key="i")
          .dot
          .title {{ item.title }}
          .date {{ item.date }}
          .description {{ item.description }}
          .links
            a.link(
              v-for="link of item.links"
              :key="link.url"
              :href="link.url"
              target="_blank") {{ link.label }}
        .right(v-if="i%2")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { LocaleMessage } from 'vue-i18n'

export interface ItemLink {
  label: string|LocaleMessage
  url: string
}

export interface Item {
  date: string|LocaleMessage
  title: string
  description: string|LocaleMessage
  links?: ItemLink[]
}

@Component({
  name: 'Timeline'
})
export default class Timeline extends Vue {
  $mq: any
  showLine: boolean
  delays: number[]
  lineAnimDuration: number

  @Prop({ default: () => [] })
  items!: Item[]

  constructor () {
    super()
    this.showLine = false
    this.delays = []
    this.lineAnimDuration = 0
  }

  mounted () {
    this.delays = new Array(this.items.length).fill(300)
  }

  get lineStyle () {
    return {
      height: this.showLine && this.items && this.items.length ? '100%' : '0',
      gridRow: `1 / ${this.items.length + 2}`,
      transitionDuration: `${this.lineAnimDuration}s`
    }
  }

  get itemClasses () {
    return (i: number): string => {
      let side = i % 2 ? 'left' : 'right'
      if (this.$mq === 'phone' || this.$mq === 'tablet-portrait') {
        side = 'right'
      }
      const visible = this.delays[i] === 0 ? 'visible' : ''
      return `${side} ${visible}`
    }
  }

  resetDelays () {
    this.delays.fill(300)
    this.showLine = false
    this.lineAnimDuration = 0
  }

  revealItems () {
    const items = this.items ? this.items.length : 0
    this.lineAnimDuration = 0.3 * (items + 2)
    let sum = 0
    this.showLine = true
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
.timeline-container {
  width: 100%;
}

.timeline {
  margin: 30px;
  display: grid;
  justify-content: center;

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

.line {
  background-color: white;
  grid-column: 2 / 3;
  width: 3px;
  margin-top: 6px;
  transition-property: height;
  transition-timing-function: ease-in-out;
}

.left {
  text-align: right;
  grid-column: 1 / 2;

  .description {
    margin-left: auto;
  }

  .dot {
    right: -36.5px;
  }
}

.item {
  position: relative;
  opacity: 0;
  transition: opacity .5s ease-in-out;

  &.visible {
    opacity: 1;
  }

  .date {
    font-size: 12px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .description {
    margin-top: 5px;
    max-width: 540px;
  }
}

.dot {
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 6px;
  position: absolute;
  top: 5px;
}

.right {
  grid-column: 3 / 4;

  .dot {
    left: -36.5px;
  }
}

.links {
  width: 100%;
  margin-top: 5px;
}

.link {
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 5px 15px;
  border: solid 1px white;
  border-radius: 20px;
  margin: 5px;

  transition: all .1s ease-in-out;

  &:hover {
    background-color: white;
    color: black;
  }
}
</style>