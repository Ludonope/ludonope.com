<template lang="pug">
  .background
    .content
      div
      transition(name="fade")
        .title(v-show="!delays.title") LUDOVIC PETRENKO
      transition(name="slide")
        .subtitle(v-show="!delays.subtitle") Full Stack Software Engineer
      .links
        transition(name="slide-left")
          a.link(v-show="!delays.icons" href="https://github.com/Ludonope" alt="GitHub" title="GitHub")
            img.logo(src="@/assets/img/logo-github.png")
        transition(name="slide-top")
          a.link(v-show="!delays.icons" href="https://gitlab.com/Ludonope" alt="GitLab" title="GitLab")
            img.logo(src="@/assets/img/logo-gitlab.png")
        transition(name="slide-right")
          a.link(v-show="!delays.icons" href="https://instagram.com/ludonope" alt="Instagram" title="Instagram")
            img.logo(src="@/assets/img/logo-instagram.png")
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import RoundButton from '@/components/RoundButton.vue'

@Component({
  name: 'Introduction',
  components: {
    RoundButton
  }
})
export default class Introduction extends Vue {
  delays: any

  constructor () {
    super()
    this.delays = {
      title: 500,
      subtitle: 800,
      icons: 800
    }
  }

  mounted () {
    let sum = 0
    for (const delay in this.delays) {
      sum += this.delays[delay]
      setTimeout(() => {
        this.delays[delay] = 0
      }, sum)
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  width: 100%;
  height: 900px;
  background: black;
  color: white;
  display: grid;
  align-content: center;
  justify-content: center;
}

.content {
  width: auto;
  height: 500px;
  display: grid;
  align-items: center;
  grid-template-rows: 20% 30% 10% 40%;
}

.title {
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 90px;
}

.subtitle {
  font-family: 'Roboto';
  font-size: 40px;
  font-weight: 200;
  text-align: center;
}

.links {
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-content: center;
  justify-content: center;
  grid-column-gap: 50px;

  .link {
    .logo {
      width: 40px;
      height: 40px;
      padding: 2px;
      transition: all .1s ease-in-out;
    }


    &:hover {
      .logo {
        width: 44px;
        height: 44px;
        padding: 0;
      }
    }
  }
}
</style>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-enter-active, .slice-leave-active {
  transition: all .8s ease-in-out;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-top-enter-active, .slide-top-leave-active {
  transition: all .8s cubic-bezier(.51,.92,.24,1);
}
.slide-top-enter, .slide-top-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-100px);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .8s cubic-bezier(.51,.92,.24,1);
}
.slide-left-enter, .slide-left-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .8s cubic-bezier(.51,.92,.24,1);
}
.slide-right-enter, .slide-right-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(100px);
}
</style>