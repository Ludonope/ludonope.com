<template lang="pug">
  .container
    img(src="@/assets/img/FR.png" @click="pick('fr')")
    img(src="@/assets/img/US.png" @click="pick('en')")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'LangPicker'
})
export default class LangPicker extends Vue {
  pick (locale: string) {
    this.$i18n.locale = locale
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 4px 12px;
}

img {
  cursor: pointer;
  margin-right: 10px;
}
</style>