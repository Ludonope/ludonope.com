<template lang="pug">
  .home
    Introduction.section#intro
    Bio.section#description
    Projects.section#projects
    .semi-section.eduskills(:class="$mq")
      Education#education
      Skills#skills
    Contacts.quarter-section#contacts
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Introduction from '@/components/Introduction.vue'
import Bio from '@/components/Bio.vue'
import Projects from '@/components/Projects.vue'
import Education from '@/components/Education.vue'
import Skills from '@/components/Skills.vue'
import Contacts from '@/components/Contacts.vue'

@Component({
  components: {
    Introduction,
    Bio,
    Projects,
    Education,
    Skills,
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

#projects {
  padding: 50px 0px;
}

// Display education and skill side by side or above each other
// depending on the screen size
.eduskills {
  display: grid;
  justify-content: center;
  align-items: center;
  justify-items: center;

  // Small devices, two rows
  &.phone, &.tablet-portrait {
    grid-template-rows: auto auto;
    grid-row-gap: 150px;
    margin: 100px 0;
    
    #education {
      grid-row: 1 / 2;
    }

    #skills {
      grid-row: 2 / 3;
      justify-self: left;
    }
  }

  // Large devices, two columns
  &.tablet-landscape, &.desktop, &.large-desktop {
    grid-template-columns: 1fr 1fr;

    #education {
      grid-column: 1 / 2;
    }

    #skills {
      grid-column: 2 / 3;
    }
  }
}
</style>