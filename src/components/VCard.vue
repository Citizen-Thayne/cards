<template lang="pug">
  .v-card(:class='[card.suite.name]')
    .rank1 {{rankChar}}
    .rank2 {{rankChar}}
    .suite {{card.suite.unicode}}
</template>


<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Card } from "@/cards";
import { get } from 'lodash'


@Component
export default class VCard extends Vue {
  @Prop({required: true}) card: Card
   get rankChar() {
      const rankMap = {
        1: 'A',
        11: 'J',
        12: 'Q',
        13: 'K'
      }
      return get(rankMap, this.card.rank , this.card.rank)
   }
}
</script>

<style lang="scss" scoped>
$black: #424b54;
$red: #990d1b;
$white: #FFFFFF;
$dimension-base: 15px;

.v-card {
  font-size: 20px;
  border: 2px solid;
  border-radius: 5px;
  min-height: 10 * $dimension-base;
  min-width: 7.1 * $dimension-base;
  background-color: $white;
  display: grid;
  grid-template-rows: 25% 50% 25%;
  grid-template-columns: 25% 50% 25%;
  grid-template-areas:
    "rank1 . ."
    ".    suite  ."
    ".    .     rank2";
  align-items: center;
  justify-content: center;
  background-color: $white;

  .rank1 {
    grid-area: rank1;
  }
  .rank2 {
    grid-area: rank2;
  }
  .suite {
    grid-area: suite;
  }
}

.diamonds,
.hearts {
  border-color: $red;
  color: $red;
}

.spades,
.clubs {
  border-color: $black;
  color: $black;
}
</style>

