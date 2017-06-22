<template>
  <div id="app">
    <div class="main">
      <img src="./assets/cat.png" width="180" draggable="false">
      <router-view></router-view>
    </div>
    <app-footer/>
  </div>
</template>

<script>
import Footer from '@/components/footer'

export default {
  name: 'app',
  components: {
    'appFooter':Footer
  }
}
</script>

<style>
#app {
  width:100%;
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 60px;
  box-sizing:border-box;
  display: flex;
  flex-direction: column;
  overflow:auto;
}

.main {
  flex: 1;
}
</style>
