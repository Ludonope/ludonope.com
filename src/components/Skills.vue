<template lang="pug">
.skills-container
  .title(:class="delays[0] === 0 ? 'visible' : ''") {{ $t("menu.skills") }}
  .skills(v-observe-visibility="visibilityChanged", :class="$mq")
    .item(v-for="(item, i) of items", :key="i")
      SkillBar(
        :enabled="!delays[i]",
        :name="$t('skills.' + item.name)",
        :value="item.value"
      )
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { LocaleMessage } from "vue-i18n";
import SkillBar from "@/components/SkillBar.vue";

export interface Item {
  skill: string | LocaleMessage;
  value: number;
}

@Component({
  name: "Skills",
  components: {
    SkillBar,
  },
})
export default class Timeline extends Vue {
  $mq: any;
  delays: number[];

  constructor() {
    super();
    this.delays = [];
  }

  get items() {
    return [
      {
        name: "programming",
        value: 0.92,
      },
      {
        name: "communication",
        value: 0.8,
      },
      {
        name: "video",
        value: 0.55,
      },
      {
        name: "photoshop",
        value: 0.63,
      },
      {
        name: "audio",
        value: 0.47,
      },
    ];
  }

  mounted() {
    this.delays = new Array(this.items.length).fill(80);
  }

  resetDelays() {
    for (const i in this.delays) {
      Vue.set(this.delays, i, 80);
    }
  }

  revealItems() {
    const items = this.items ? this.items.length : 0;
    let sum = 500;
    let j = 0;
    for (const i in this.items) {
      sum += this.delays[i];
      setTimeout(() => {
        Vue.set(this.delays, i, 0);
      }, sum);
    }
  }

  visibilityChanged(isVisible: boolean, entry: any) {
    if (isVisible) {
      this.revealItems();
    } else if (entry.boundingClientRect.top >= 0) {
      this.resetDelays();
    }
  }
}
</script>

<style lang="scss" scoped>
.skills-container {
  max-width: 100%;
  display: grid;
  align-content: start;
  grid-template-rows: 100px 1fr;
  height: 100%;
}

.skills {
  display: grid;
  grid-template-columns: 1fr;
  width: 450px;
  justify-content: space-between;
  align-content: center;

  grid-auto-rows: auto;
  grid-row-gap: 30px;

  &.phone {
    width: 100vw;
  }
}

.title {
  text-align: center;
  font-size: 20px;
  align-self: center;

  opacity: 0;
  transition: opacity 0.5s ease-in-out;

  &.visible {
    opacity: 1;
  }
}
</style>