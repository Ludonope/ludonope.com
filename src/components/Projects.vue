<template lang="pug">
  Timeline(:items="items")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Timeline, { Item } from '@/components/Timeline.vue'

@Component({
  name: 'Projects',
  components: {
    Timeline
  }
})
export default class Projects extends Vue {
  get items (): Item[] {
    return [
      {
        title: 'ludonope.com',
        date: this.$t('experiences.ludonope.date'),
        description: this.$t('experiences.ludonope.description'),
        links: [
          {
            label: 'GitHub',
            url: 'https://github.com/Ludonope/ludonope.com'
          }
        ]
      },
      {
        title: 'Beach Launch Team',
        date: this.$t('experiences.blt.date'),
        description: this.$t('experiences.blt.description'),
        links: [
          {
            label: this.$t('experiences.labels.website'),
            url:  'https://www.beachlaunchteam.com/'
          },
          {
            label: 'Instagram',
            url: 'https://www.instagram.com/beachlaunchteam/'
          }
        ]
      },
      {
        title: 'Rematch',
        date: this.$t('experiences.rematch.date'),
        description: this.$t('experiences.rematch.description'),
        links: [
          {
            label: this.$t('experiences.labels.website'),
            url: 'https://www.rematch.tv/'
          },
          {
            label: 'AppStore',
            url: 'https://apps.apple.com/fr/app/rematch-vid%C3%A9os-sport-amateur/id1413806555'
          },
          {
            label: 'PlayStore',
            url: 'https://play.google.com/store/apps/details?id=fr.lapassevideo&hl=en'
          }
        ]
      },
      {
        title: 'Manacore',
        date: this.$t('experiences.manacore.date'),
        description: this.$t('experiences.manacore.description'),
        links: [
          {
            label: this.$t('experiences.labels.website'),
            url: 'https://www.manacore.io/'
          }
        ]
      }
    ]
  }
}
</script>
