<template lang='pug'>
#app
  button(@click='shuffle') Shuffle
  transition-group#my-deck(name='shuffle-deck')
    v-card(v-for='card in deck.cards' :key='card.name' :card='card' style='height: 100px; width: 71px')
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VCard from "./components/VCard.vue";
import Deck from "@/decks/Deck";

@Component({
  components: {
    VCard
  }
})
export default class App extends Vue {
  deck = new Deck();
  shuffle(): void {
    this.deck.shuffle()
  }
}
</script>

<style lang='scss'>

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#my-deck {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin: 10px;
  }
}

.shuffle-deck-move {
  transition: transform 1s;
}
</style>
