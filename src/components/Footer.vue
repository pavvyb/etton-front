<template>
  <div class="footer">
    <span>{{ developerEmail }}</span>
  </div>
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
