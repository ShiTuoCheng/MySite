<template>
  <div id="app">
    <v-header></v-header>
      <transition name="slide-left">
          <router-view></router-view>
      </transition>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "./components/Header.vue"
import vFooter from "./components/Footer.vue"
export default {
  name: 'app',
  components: {
    vHeader,
    vFooter
  }
}
</script>

<style lang="less">
@import "../src/css/common";
#app {
  min-width: 1200px;
  overflow-x: hidden;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .slide-left-enter-active, .slide-left-leave-active {
        transition: transform .5s;
        transform-origin: right;
  }
  .slide-left-enter, .slide-left-leave-active {
        transform: scale(0,1);
  }
}
</style>
