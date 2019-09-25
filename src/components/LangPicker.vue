<template lang="pug">
  .container
    img(src="@/assets/img/france-flag-icon-32.png" @click="pick('fr')")
    img(src="@/assets/img/united-states-of-america-flag-icon-32.png" @click="pick('en')")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  name: 'LangPicker'
})
export default class LangPicker extends Vue {
  pick(locale: string) {
    this.$i18n.locale = locale
    // this.$i18n.fallbackLocale = locale
  }
}
</script>

<style lang="scss" scoped>
.container {
  padding: 8px 12px;
}

img {
  cursor: pointer;
  height: 18px;
  margin-right: 10px;
}
</style>