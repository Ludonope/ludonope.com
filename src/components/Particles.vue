<template lang="pug">
  .particles
    svg.svg(xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice")
      circle(v-for="item of items" :cx="item.x+50" :cy="item.y+50" :r="item.size*1.5" fill="white" :opacity="item.opacity*0.9")
    svg.svg(xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="")
      linearGradient(id="grad1" x1="0" y1="0" x2="100" y2="100")
        stop(offset="0%" style="stop-color:rgb(255,255,0);stop-opacity:1")
        stop(offset="100%" style="stop-color:rgb(255,0,0);stop-opacity:1")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

interface Particle {
  x: number
  y: number
  size: number
  ratio: number
  opacity: number
}

@Component({})
export default class Particles extends Vue {
  items: Particle[]

  constructor () {
    super()
    this.items = []
  }

  refill () {
    const n = 100 - this.items.length

    for (let i = 0; i < n; i++) {
      const r = Math.random() * 0.0001 + 1
      this.items.push({
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        size: 0.03 * r,
        ratio: r,
        opacity: 0
      })
    }
  }

  refresh (power = 1) {
    for (const item of this.items) {
      const r = Math.pow(1.001 * item.ratio, power)
      item.x *= r
      item.y *= r
      item.size *= r

      if (item.size > 6) {
        item.opacity = 1
      } else {
        item.opacity = item.size * 6
      }
    }

    this.items = this.items.filter(item => {
      if (item.x + item.size <= -50 || item.x - item.size >= 50) {
        return false
      }
      if (item.y + item.size <= -50 || item.y - item.size >= 50) {
        return false
      }
      return true
    })

  }

  mounted () {
    this.refill()
    for (let i = 0; i < 10; i++) {
      this.refresh(100)
      this.refill()
    }
    setInterval(() => {
      this.refresh()
      this.refill()
    }, 16)
  }
}
</script>

<style lang="scss" scoped>
.particle {
  position: relative;
}

.svg {
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
}
</style>