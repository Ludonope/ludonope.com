<template lang="pug">
.bio-section
  div(v-observe-visibility="visibilityChanged")
  transition(name="fade")
    .text(v-show="!delay") {{ $t("intro.bio") }}
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Bio",
})
export default class Bio extends Vue {
  delay: number;

  constructor() {
    super();
    this.delay = 200;
  }

  visibilityChanged(isVisible: boolean, entry: any) {
    if (isVisible) {
      setTimeout(() => {
        this.delay = 0;
      }, this.delay);
    } else if (entry.boundingClientRect.top >= 0) {
      this.delay = 200;
    }
  }
}
</script>

<style lang="scss" scoped>
.bio-section {
  color: white;
  width: 100%;
  min-height: 110vh;
  display: grid;
  justify-content: center;
  align-content: center;
}

.text {
  max-width: 880px;
  text-align: center;
  font-size: 23px;
  line-height: 1.3em;
  margin: 0 10px;
}
</style>