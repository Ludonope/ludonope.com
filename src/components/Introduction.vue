<template lang="pug">
.container
  Particles.background
  .content(:class="$mq")
    transition(name="fade")
      .title(v-show="!delays.title", :class="$mq")
        .first LUDOVIC
        .last PETRENKO
    transition(name="slide")
      .subtitle(v-show="!delays.subtitle", :class="$mq") {{ $t("intro.subtitle") }}
    .links
      transition(name="slide-left")
        a.link(
          v-show="!delays.icons",
          href="https://github.com/Ludonope",
          alt="GitHub",
          title="GitHub",
          target="_blank"
        )
          img.logo(src="@/assets/img/logo-github.png")
      transition(name="slide-top")
        a.link(
          v-show="!delays.icons",
          href="https://www.linkedin.com/in/ludovicpetrenko/",
          alt="LinkedIn",
          title="LinkedIn",
          target="_blank"
        )
          img.logo(src="@/assets/img/logo-linkedin.png")
      transition(name="slide-right")
        a.link(
          v-show="!delays.icons",
          href="https://youtube.com/@ludonope",
          alt="YouTube",
          title="YouTube",
          target="_blank"
        )
          img.logo(src="@/assets/img/logo-youtube.png")
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import Particles from "@/components/Particles.vue";

@Component({
  name: "Introduction",
  components: {
    Particles,
  },
})
export default class Introduction extends Vue {
  delays: any;

  constructor() {
    super();
    this.delays = {
      title: 500,
      subtitle: 200,
      icons: 1000,
    };
  }

  mounted() {
    let sum = 0;
    for (const delay in this.delays) {
      sum += this.delays[delay];
      setTimeout(() => {
        this.delays[delay] = 0;
      }, sum);
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  // background: black;
  display: grid;
  align-content: center;
  justify-content: center;
  position: relative;
}

.background {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.content {
  text-align: center;
  width: auto;
  display: grid;
  align-items: center;
  margin-top: 40px;
  grid-template-rows: 30% 14% 56%;
  height: 360px;

  &.phone,
  &.tablet-portrait {
    height: 290px;
  }
  z-index: 0;
}

.title {
  font-weight: 100;
  display: grid;
  width: 100%;
  grid-column-gap: 20px;
  justify-content: center;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 20px;

  font-size: 90px;
  &.tablet-portrait {
    font-size: 60px;
  }
  &.phone {
    font-size: 33px;
  }

  .first {
    grid-column: 1 / 2;
    font-family: "ZwizzRegular", "Roboto", "Arial";
  }

  .last {
    grid-column: 2 / 3;
    font-family: "ZwizzBold", "Roboto", "Arial";
  }

  .all {
    grid-column: 1 / 4;
    grid-row: 1/ 3;
  }
}

.subtitle {
  font-family: "Roboto";
  font-size: 40px;
  &.tablet-portrait {
    font-size: 30px;
  }
  &.phone {
    font-size: 22px;
  }
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
      transition: all 0.1s ease-in-out;
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
.slide-enter-active,
.slice-leave-active {
  transition: all 0.8s ease-in-out;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.slide-top-enter-active,
.slide-top-leave-active,
.slide-bottom-enter-active,
.slide-bottom-leave-active,
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.6s cubic-bezier(0.51, 0.92, 0.24, 1);
}

.slide-top-enter,
.slide-top-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.slide-bottom-enter,
.slide-bottom-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

.slide-left-enter,
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100px);
}
</style>