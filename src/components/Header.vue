<template lang="pug">
  header(class="header")
    dropdown-menu
    img(src="../assets/images/logo.png" class="logo")
</template>

<script>
import Menu from './Menu.vue'

export default {
  name: 'Header',
  components: {
    'dropdown-menu': Menu,
  },
  props: {
    logoUrl: String
  }
}
</script>
