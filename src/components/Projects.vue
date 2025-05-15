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
        title: 'Moonly',
        date: this.$t('experiences.moonly.date'),
        description: this.$t('experiences.moonly.description'),
        links: [
          {
            label: this.$t('experiences.labels.website'),
            url: 'https://moonlyapp.com/'
          },
          {
            label: 'AppStore',
            url: 'https://apps.apple.com/fr/app/moonly/id1511574452'
          },
          {
            label: 'PlayStore',
            url: 'https://play.google.com/store/apps/details?id=com.moonlyapp.app'
          },
          {
            label: 'Instagram',
            url: 'https://www.instagram.com/moonly.health/'
          }
        ]
      },
      {
        title: 'KBRW',
        date: this.$t('experiences.kbrw.date'),
        description: this.$t('experiences.kbrw.description'),
        links: [
          {
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/company/kbrw/'
          }
        ]
      },
      {
        title: 'ludonope.dev',
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
      }
    ]
  }
}
</script>
