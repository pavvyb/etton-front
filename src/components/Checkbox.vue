<template>
  <div class="checkbox">
      <img src="@/assets/images/checkbox-active.svg" v-if="isSelected" @click="isSelected = !isSelected">
      <img src="@/assets/images/checkbox-default.svg" v-else @click="isSelected = !isSelected">
      <span>{{ inputText }}</span>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    inputText: String
  },
  data() {
    return {
      isSelected: false,
    }
  },
}
</script>

<style scoped lang="scss">
</style>
