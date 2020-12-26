<template>
  <article id="game">
    <rules-graph></rules-graph>
    <div id="player-selection">
      <form action="" id="player-selection__form">
        <fieldset id="player-selection__fieldset">
          <legend>Select</legend>
          <section id="radio-buttons">
            <label>
              <input type="radio" value="0" v-model.number="playerSelection" />
              <span>Rock</span>
            </label>
            <label>
              <input type="radio" value="2" v-model.number="playerSelection" />
              <span>Paper</span>
            </label>
            <label>
              <input type="radio" value="1" v-model.number="playerSelection" />
              <span>Scissors</span>
            </label>
          </section>

          <button @click.prevent="play()" id="play-button">Play</button>
        </fieldset>
      </form>
    </div>
    <div id="game-display"></div>
  </article>
</template>

<script>
import RulesGraph from "../components/RulesGraph.vue";
export default {
  components: { RulesGraph },

  name: "rock-paper-scissors",

  data: function() {
    return {
      playerSelection: -1,
      computerSelection: -1,
    };
  },

  computed: {
    gameResult() {
      var result;

      if (this.playerSelection == this.computerSelection) return 0;

      switch (this.playerSelection) {
        case 0:
          this.computerSelection == 1 ? (result = 1) : (result = -1);
          break;
        case 1:
          this.computerSelection == 2 ? (result = 1) : (result = -1);
          break;
        case 2:
          this.computerSelection == 0 ? (result = 1) : (result = -1);
          break;
        default:
          result = -2;
      }

      return result;
    },
  },

  methods: {
    play() {
      this.computerSelection = this.getRandomInt(0, 3);

      console.log("player selection: " + this.playerSelection);
      console.log("computer selection: " + this.computerSelection);

      this.endGame(this.gameResult);
    },

    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      //The maximum is exclusive and the minimum is inclusive
      return Math.floor(Math.random() * (max - min) + min);
    },

    endGame(gameResult) {
      switch (gameResult) {
        case -1:
          console.log("You lose!");
          break;
        case 0:
          console.log("It's a tie!");
          break;
        case 1:
          console.log("You win!");
          break;
        default:
          console.log("Please make a selection");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin formReset() {
  input {
    font-size: inherit;
    font-size: calc(max(16px, 1em));
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 1px solid black;
    border-radius: 5px;
  }
  legend {
    padding: 0 0.5rem;
  }
}

@mixin resetButton() {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

@include formReset;

#player-selection {
  padding: 2rem;
  #player-selection__fieldset {
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    gap: 1rem;
    #radio-buttons {
      grid-row: 1;
      display: flex;
      justify-content: space-between;

      input {
        margin-right: 0.5rem;
      }

      label {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
      }
    }
    #play-button {
      grid-row: 2;
      @include resetButton;
      border: 1px solid black;
      background-color: black;
      color: white;
      font-weight: bold;
      border-radius: 10px;
      place-self: center;
      padding: 1rem 1.5rem;
      &:hover {
        background-color: white;
        color: black;
      }
    }
  }
}
</style>
