<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@mixin reset() {
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }
}

@include reset;
</style>
