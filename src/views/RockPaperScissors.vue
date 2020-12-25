<template>
  <article id="game">
    <rules-graph></rules-graph>
    <div id="player-selection">
      <form action="" id="player-selection__form">
        <fieldset id="player-selection__fieldset">
          <legend>Select</legend>
          <section id="radio-buttons">
            <label>
              <input type="radio" value="rock" v-model="selection" />
              <span>Rock</span>
            </label>
            <label>
              <input type="radio" value="paper" v-model="selection" />
              <span>Paper</span>
            </label>
            <label>
              <input type="radio" value="scissors" v-model="selection" />
              <span>Scissors</span>
            </label>
          </section>

          <button @click="login()" id="play-button">Play</button>
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
      selection: {
        type: String,
      },
    };
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

@mixin prettyRadio() {
  /* pretty radio */
  label > input[type="radio"] {
    display: none;
  }
  label > input[type="radio"] + *::before {
    content: "";
    display: inline-block;
    vertical-align: bottom;
    width: 1rem;
    height: 1rem;
    margin-right: 0.3rem;
    border-radius: 50%;
    border-style: solid;
    border-width: 0.1rem;
    border-color: gray;
  }
  label > input[type="radio"]:checked + * {
    color: teal;
  }
  label > input[type="radio"]:checked + *::before {
    background: radial-gradient(
      teal 0%,
      teal 40%,
      transparent 50%,
      transparent
    );
    border-color: teal;
  }

  /* basic layout */
  fieldset {
    margin: 20px;
    max-width: 400px;
  }
  label > input[type="radio"] + * {
    display: inline-block;
    padding: 0.5rem 1rem;
  }
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

  // @include prettyRadio;
}
</style>
