<template>
  <article id="game-display">
    <template v-if="gameOn">
      <section id="player-icon">
        <h1>Player Selection:</h1>
        <div v-if="playerSelection == 0">
          <p><font-awesome-icon icon="hand-rock" /></p>
        </div>
        <div v-else-if="playerSelection == 1">
          <p><font-awesome-icon icon="hand-scissors" rotation="90" /></p>
        </div>
        <div v-else-if="playerSelection == 2">
          <p><font-awesome-icon icon="hand-paper" /></p>
        </div>
      </section>

      <section id="comparison">
        <div v-if="gameResult == -1">
          <p><font-awesome-icon icon="angle-left" /></p>
        </div>
        <div v-else-if="gameResult == 1">
          <p><font-awesome-icon icon="angle-right" /></p>
        </div>
        <div v-else-if="gameResult == 0">
          <p>&equals;</p>
        </div>
      </section>

      <section id="computer-icon">
        <h1>Computer Selection:</h1>
        <div v-if="computerSelection == 0">
          <p><font-awesome-icon icon="hand-rock" /></p>
        </div>
        <div v-else-if="computerSelection == 1">
          <p><font-awesome-icon icon="hand-scissors" rotation="90" /></p>
        </div>
        <div v-else-if="computerSelection == 2">
          <p><font-awesome-icon icon="hand-paper" /></p>
        </div>
      </section>

      <section id="game-result">
        <div v-if="gameResult == -1">
          <p>You lose!</p>
        </div>
        <div v-else-if="gameResult == 1">
          <p>You win!</p>
        </div>
        <div v-else-if="gameResult == 0">
          <p>It's a tie!</p>
        </div>
      </section>
    </template>
  </article>
</template>

<script>
export default {
  name: "game-display",

  props: ["playerSelection", "computerSelection", "gameResult", "gameOn"],
};
</script>

<style lang="scss" scoped>
#game-display {
  display: grid;
  gap: 1rem;
  place-items: center;
  grid-auto-columns: 1fr auto 1fr;
  grid-auto-rows: 1fr auto;

  #player-icon {
    grid-column: 1;
    grid-row: 1;
  }
  #comparison {
    grid-column: 2;
    grid-row: 1;
  }
  #computer-icon {
    grid-column: 3;
    grid-row: 1;
  }
  #game-result {
    grid-column: 1 / 4;
    grid-row: 2;
  }
}
</style>
