<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/login">Login</router-link> -->
    </div>
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
