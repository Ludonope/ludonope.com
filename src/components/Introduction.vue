<template lang="pug">
  .background
    .content(:class="$mq")
      div
      transition(name="fade")
        .title(v-show="!delays.title") LUDOVIC PETRENKO
      transition(name="slide")
        .subtitle(v-show="!delays.subtitle") {{ $t('intro.subtitle') }}
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

@Component({
  name: 'Introduction'
})
export default class Introduction extends Vue {
  delays: any

  constructor () {
    super()
    this.delays = {
      title: 500,
      subtitle: 200,
      icons: 1000
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
  text-align: center;
  width: auto;
  display: grid;
  align-items: center;

  &.tablet-landscape, &.desktop, &.large-desktop {
    height: 500px;
    grid-template-rows: 10% 40% 10% 40%;
  }
  &.phone, &.tablet-portrait {
    height: 700px;
    grid-template-rows: 20% 30% 20% 30%;
  }
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
.slide-enter-active, .slice-leave-active {
  transition: all .8s ease-in-out;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-top-enter-active, .slide-top-leave-active,
.slide-left-enter-active, .slide-left-leave-active,
.slide-right-enter-active, .slide-right-leave-active {
  transition: all .6s cubic-bezier(.51,.92,.24,1);
}

.slide-top-enter, .slide-top-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slide-left-enter, .slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-right-enter, .slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>