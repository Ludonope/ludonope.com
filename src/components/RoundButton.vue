<template lang="pug">
  router-link.button(:to="to")
    slot
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'RoundButton'
})
export default class extends Vue {
  @Prop() to: string
}
</script>

<style lang="scss" scoped>
.button {
  color: white;
  text-decoration: none;
  border: solid 1px white;
  padding: 10px 20px;
  border-radius: 30px;
}
</style>