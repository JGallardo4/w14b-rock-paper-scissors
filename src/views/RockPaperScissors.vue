<template>
  <article id="game">
    <rules-graph></rules-graph>
  </article>
</template>

<script>
import RulesGraph from "../components/RulesGraph.vue";
export default {
  components: { RulesGraph },
  name: "rock-paper-scissors",
};
</script>

<style lang="scss" scoped></style>
