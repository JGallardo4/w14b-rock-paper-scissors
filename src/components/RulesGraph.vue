<template>
  <article id="rules-graph">
    <div id="rock" class="icon main-icon">
      <font-awesome-icon icon="hand-rock" />
    </div>
    <div id="angle1" class="icon angle">
      <font-awesome-icon icon="angle-right" />
    </div>
    <div id="scissors" class="icon main-icon">
      <font-awesome-icon icon="hand-scissors" rotation="90" />
    </div>
    <div id="angle2" class="icon angle">
      <font-awesome-icon icon="angle-right" />
    </div>
    <div id="paper" class="icon main-icon">
      <font-awesome-icon icon="hand-paper" />
    </div>
    <div id="angle3" class="icon angle">
      <font-awesome-icon icon="angle-right" />
    </div>
  </article>
</template>

<script>
export default {
  name: "rules-graph",
};
</script>

<style lang="scss" scoped>
/// Mixin to place items on a circle
/// @author Hugo Giraudel
/// @author Ana Tudor
/// @param {Integer} $item-count - Number of items on the circle
/// @param {Length} $circle-size - Large circle size
/// @param {Length} $item-size - Single item size
@mixin on-circle($item-count, $circle-size, $item-size) {
  position: relative;
  width: $circle-size;
  height: $circle-size;
  padding: 0;
  border-radius: 50%;
  list-style: none;

  > * {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: $item-size;
    height: $item-size;
    margin: -($item-size / 2);
  }
}

.icon {
  font-size: 5rem;
  width: 5em;
  height: 5em;
  display: grid !important;
  place-items: center;
  > * {
    display: inline-block;
  }
}

#rock {
  transform: rotate(0deg) translate(9.4rem) rotate(0deg);
}
#angle1 {
  transform: rotate(60deg) translate(10rem) rotate(100deg);
}
#scissors {
  transform: rotate(120deg) translate(8.5rem) rotate(-120deg);
}
#angle2 {
  transform: rotate(180deg) translate(9.8rem) rotate(-265deg);
}
#paper {
  transform: rotate(240deg) translate(10.5rem) rotate(-240deg);
}
#angle3 {
  transform: rotate(300deg) translate(9.8rem) rotate(-270deg);
}

#rules-graph {
  @include on-circle($item-count: 6, $circle-size: 20rem, $item-size: 5rem);
  margin: 5em auto 0;
  border: solid 5px tomato;
}
</style>
