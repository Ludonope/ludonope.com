<template lang="pug">
  .container
    transition(name="fade")
      .skill-container(v-show="enabled" :class="$mq")
        .skill-name {{ name }}
        .skill-bar
          .bar(:style="lineStyle")
          .dot(:style="dotStyle")
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

@Component({
  name: 'SkillBar'
})
export default class SkillBar extends Vue {
  showLine: boolean

  @Prop({})
  enabled!: boolean

  @Prop({})
  name!: string

  @Prop({})
  value!: number

  constructor () {
    super()
    this.showLine = false
  }

  @Watch('enabled')
  onPropertyChanged (value: boolean, oldValue: boolean) {
    if (!oldValue && value) {
      setTimeout(() => {
        this.showLine = true
      }, 300)
    } else if (!value) {
      this.showLine = false
    }
  }

  get lineStyle () {
    return {
      width: this.showLine ? '100%' : '0%'
    }
  }

  get dotStyle () {
    return {
      left: this.showLine ? `${100*this.value}%` : '0%'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 25px;
}

.skill-container {
  display: grid;
  align-items: center;

  // Most devices
  &.tablet-portrait, &.tablet-landscape, &.desktop,  &.large-desktop {
    grid-template-columns: 1fr 250px;
    justify-content: space-between;
  }

  // Very small devices only
  &.phone {
    width: 60%;
    margin: auto;
    grid-template-rows: 25px 25px;
  }
}

.skill-name {
  justify-self: left;
}

.skill-bar {
  justify-self: right;
  position: relative;
  width: 100%;
}

.bar {
  transition: width .4s ease-in;
  background-color: white;
  height: 3px;
}

.dot {
  transition: all .7s ease-in;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 6px;
  position: absolute;
  top: -3.5px;
}
</style>