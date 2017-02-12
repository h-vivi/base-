<template>
  <div id="app">
    <div class="container">
      <router-view></router-view>
    </div>
    <app-footer class="app-footer"></app-footer>
  </div>
</template>

<script>
  import AppFooter from 'components/business/base/app-footer';

  export default {
    name: 'app',

    components: {
      AppFooter,
    },
  };
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    font-family: Consolas, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #app > .container {
    height: calc(100% - 40px);
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  #app > .app-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
  }
</style>
