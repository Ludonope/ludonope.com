<template lang="pug">
  div
    .main-menu
      .home-button Ludovic Petrenko
      div
      .menu-buttons
        .menu-button(v-for="(opt, i) of menuOptions" :key="i")
          router-link.link(:to="opt.link") {{ opt.label }}
          .underline
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class MenuBar extends Vue {
  data () {
    return {
      menuOptions:[
        {
          label: this.$t('menu.description'),
          link: '#description'
        },
        {
          label: this.$t('menu.experiences'),
          link: '#experiences'
        },
        {
          label: this.$t('menu.projects'),
          link: '#projects'
        },
        {
          label: this.$t('menu.contacts'),
          link: '#contacts'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.main-menu {
  color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 20px;
}

.menu-buttons {
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 15px;
  margin-right: 100px;
  align-items: center;
  justify-items: center;


  .menu-button {
    .link {
      color: white;
      text-decoration: none;
      font-size: 17px;
    }

    padding: 8px 12px;

    &:hover {
      .underline {
        transform: scaleX(1);
      }
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
