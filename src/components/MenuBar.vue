<template lang="pug">
  div
    .main-menu
      div
      .menu-buttons
        router-link.menu-button(
          v-for="(opt, i) of menuOptions"
          :key="i"
          :to="opt.link"
        )
          .link {{ opt.label }}
          .underline
      LangPicker
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import LangPicker from '@/components/LangPicker.vue'

@Component({
  components: {
    LangPicker
  }
})
export default class MenuBar extends Vue {
  get menuOptions () {
    return [
      {
        label: this.$t('menu.intro'),
        link: '#intro'
      },
      {
        label: this.$t('menu.projects'),
        link: '#projects'
      },
      {
        label: this.$t('menu.education'),
        link: '#education'
      },
      {
        label: this.$t('menu.skills'),
        link: '#skills'
      },
      {
        label: this.$t('menu.contacts'),
        link: '#contacts'
      }
    ]
  }
}
</script>

<style scoped lang="scss">
.main-menu {
  display: grid;
  grid-template-columns: 1fr auto auto;

  padding: 20px;
  margin-right: 20px;
}

.menu-buttons {
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-column-gap: 15px;
  align-items: center;
  justify-items: center;

  margin-right: 20px;
  font-weight: 300;

  .menu-button {
    text-decoration: none;
    padding: 8px 12px;

    .link {
      color: white;
      font-size: 17px;
    }

    &:hover > .underline {
      transform: scaleX(1);
    }

    .underline {
      transition: transform .1s ease-in-out;
      width: auto;
      transform: scaleX(0);
      height: 3px;
      border-radius: 3px;
      background-color: white;
      margin: 5px 15px 0 15px;
    }
  }
}

</style>
