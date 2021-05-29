<template>
  <div class="menu">
      <button class="menu-button" @click="isOpened = !isOpened">
          <img src="@/assets/images/cross.svg" v-if="isOpened" class="close-image">
          <img src="@/assets/images/burger.svg" v-else class="open-image">
      </button>
      <div v-if="isOpened" class="menu-links">
          <router-link to="/" @click="isOpened = false">Main page</router-link>
          <router-link to="/catalog" @click="isOpened = false">Cards page</router-link>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  components: {
    //   'file-uploader': Uploader,
  },
  props: {
    // modalHeader: String
  },
  data() {
    return {
        isOpened: false,
    }
  },
  methods: {
    // close() {
    //   this.$emit('close');
    // },
  },
}
</script>

<style scoped lang="scss">
</style>
