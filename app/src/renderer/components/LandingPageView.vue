<template>
  <div>
    <h1>Welcome.</h1>
    <current-page></current-page>
    <versions></versions>
    <links></links>
    <clock></clock>
  </div>
</template>

<script>
  import CurrentPage from './LandingPageView/CurrentPage'
  import Links from './LandingPageView/Links'
  import Versions from './LandingPageView/Versions'
  import Clock from './Clock.vue'
  export default {
    components: {
      CurrentPage,
      Links,
      Versions,
        Clock
    },
    name: 'landing-page'
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
