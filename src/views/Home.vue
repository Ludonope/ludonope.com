<template lang="pug">
  .home
    Introduction.section#intro
    Bio
    Projects.section#projects
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue'
import Bio from '@/components/Bio.vue'
import Projects from '@/components/Projects.vue'

@Component({
  components: {
    Introduction,
    Bio,
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

#projects {
  padding-top: 50px;
}
</style>