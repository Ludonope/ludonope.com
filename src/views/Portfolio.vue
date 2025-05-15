<template lang="pug">
.home
  iframe(
    src="https://docs.google.com/presentation/d/e/2PACX-1vTK-wTkoEjVYkSWdRy28niM_oLasIRccJshBnRID2zoV9ZLbB13mi_pPiiQLbhUMVA_3QZdQB4lY20N/embed?start=false&loop=false&delayms=60000"
    frameborder="0"
    width="960"
    height="569"
    allowfullscreen="true"
    mozallowfullscreen="true"
    webkitallowfullscreen="true"
  )
  Contacts.quarter-section#contacts
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Contacts from '@/components/Contacts.vue'

@Component({
  components: {
    Contacts
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
}

.semi-section {
  min-height: 50vh;
}

.quarter-section {
  min-height: 40vh; // Not really a quarter tho
}
</style>