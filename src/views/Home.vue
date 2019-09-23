<template lang="pug">
  .home
    Introduction.section
    Projects.section
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue'
import Projects from '@/components/Projects.vue'

@Component({
  components: {
    Introduction,
    Projects
  }
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.section {
  min-height: 100vh;
}
</style>