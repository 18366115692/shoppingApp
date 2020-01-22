<template>
  <div id="app">
    <router-view/>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
import MainTabbar from './components/tabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import './assets/css/base.css';
@import './assets/css/border.css';
@import './assets/css/reset.css';
</style>
