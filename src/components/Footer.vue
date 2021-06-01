<template lang="pug">
  footer.footer
    span {{ developerEmail }}
</template>

<script>
export default {
  name: 'Header',
  props: {
    developerEmail: String
  }
}
</script>

<style scoped lang="scss">
</style>
