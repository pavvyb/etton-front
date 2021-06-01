<template>
  <div id="app">
    <custom-header logoUrl="../assets/images/logo.png" />
    <router-view/>
    <custom-footer developerEmail="pavvyb@icloud.com" />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'

  export default {
    components:{
         'custom-header': Header,
         'custom-footer': Footer
     }
  }
</script>

<style lang="scss">
</style>
